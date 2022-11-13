import React, { useEffect, useState } from "react";





function UserDetails() {
    return (
        <div class="bottom-0 border-gray-100">
        <a
            href="#"
            class="flex shrink-0 items-center bg-white p-4 "
        >
            <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="h-20 w-20 rounded-full object-cover"
            />

            <div class="ml-1.5">
                <p class="text-xs">
                    <strong class="block font-medium">Eric Frusciante</strong>                            </p>
            </div>
        </a>
    </div>
    )
}

export function ConnectButton() {

    const [tronLink, setTronLink] = useState(null);

    const connectButton =async  () => {
        if(!tronLink.ready) {
            const res = await tronLink.request({method: 'tron_requestAccounts'})
        }
    }

    useEffect(() => {

        if(!tronLink) {
            setInterval(() => {
                if(window.tronLink) setTronLink(window.tronLink)
            }, 100)   
        }

        console.log("Check")
    }, [tronLink])


    let elem = (
        <a
            class="inline-block rounded border 
            border-indigo-600 px-12 py-3 
            text-sm font-medium text-indigo-600 
            hover:bg-indigo-600 hover:text-white 
            focus:outline-none focus:ring active:bg-indigo-500
            w-full text-center"
            href="#"
            onClick={() => connectButton()}
        >
            Connect Wallet
        </a>
    )

    if(tronLink && tronLink.ready) {
        let address = tronLink.tronWeb.defaultAddress.base58
        address = address.substring(0, 15)
        let svg = `https://avatars.dicebear.com/api/personas/${address}.svg`

        elem = (                <div class="border-gray-100">
        <a
            href="#"
            class="flex items-center"
        >
            <img
                alt="Man"
                src={svg}
                class="h-10 w-10 rounded-full object-cover"
            />

            <div class="ml-1.5">
                <p class="text-xs">
                    <strong class="block font-medium">{address}...</strong>                            </p>
            </div>
        </a>
    </div>)
    }

    return elem
}