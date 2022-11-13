

const data = require("../utils/data.json")

const concertABi = require("../abis/concert.json")

export class EventContract {
    constructor(tronWeb) {
        this.contract = null
        this.tronWeb = tronWeb;
    }

    async loadContract(address) {
        let instance = await window.tronWeb.contract().at(address)
        this.contract = instance
        this.nfts = []
    }
    async getMyNfts(address) {
        const balance = await this.contract.methods.balanceOf(address).ca
        const nfts = []

        while(balance > 0) {
            const nftID = await this.contract.tokenOfOwnerByIndex(address, balance)
            nfts.push(nftID)
            balance --;
        }
        return nfts;
    }

    async getNFT(address, index) {
        console.log(address)
        console.log(this.contract)
        const balance = await this.contract.balanceOf(address).call()
        if(balance <= index ) {
            return null
        }
        const nftID = await this.contract.tokenOfOwnerByIndex(address, index).call()
        return nftID;
    }
}


export async function getAllMyNFTs(address, tronWeb) {
    const nfts = [];
    for(let index = 0;index < data.length;index++ ) {
        let event = data[index];
        let eventContract =new EventContract(tronWeb);
        console.log(event.address)
        await eventContract.loadContract(event.address)
        const nftID = await eventContract.getNFT(address,0);
        console.log(nftID)
        nfts.push({
            id: nftID,
            address: event.address,
            index
        })
    }
    return nfts;
}



export async function NewContract() {
    let contract =  new EventContract()
    await contract.loadContract();
    return contract;
}