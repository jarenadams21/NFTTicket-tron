



export class EventContract {
    constructor() {
        this.contract = null
    }

    async loadContract() {
        let instance = await tronWeb.contract().at("TREwN2qRkME9TyQUz8dG6HfjEyKGMPHAS5")
        this.contract = instance

        this.nfts = []
    }
    async getMyNfts(address) {

        const balance = await this.contract.balanceOf(address)
        const nfts = []

        while(balance > 0) {
            const nftID = await this.contract.tokenOfOwnerByIndex(address, balance)
            nfts.push(nftID)
            balance --;
        }
        return nfts;
    }

    async getNFT(nftID) {
        return 
    }
}


export async function NewContract() {
    let contract =  new EventContract()
    await contract.loadContract();
    return contract;
}