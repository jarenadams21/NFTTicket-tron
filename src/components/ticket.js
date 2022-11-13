import { useState } from "react";
import QRCode from "react-qr-code";
import Popup from 'reactjs-popup';
export const Ticket = ({img, location, eventName, NFTID, balance, contractAddress}) => {
  const [refillAmt, setRefillAmount] = useState(0)
  const [refllTotal, setTotalRefil] = useState(0);
  const refill = () => {
    setTotalRefil(parseInt(refillAmt) + refllTotal)
  }
    return (
        <a href="#" class="text-white m-6 block rounded-lg p-4 shadow-sm shadow-indigo-100">
  <img
    src={img}
    class="h-64 w-full rounded-md object-cover"
  />

  <div class="mt-2">

<div className="header font-medium text-xl m-2 text-center"> {eventName} </div>
<div className="header font-bold text-2xl m-2 text-center"> ${refllTotal} </div>


  <div class="p-6 flex flex-row items-center justify-between">



<Popup
    trigger={<button className="mt-4 flex items-center justify-center rounded-xl border-4 border-black bg-red-500 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50"> My NFT </button>}
    modal
  >
    {close => (
      <div className="drop-shadow-4xl modal bg-white p-8 rounded-xl">

        <div className="header font-bold text-4xl m-3 text-center"> Scan QR </div>

<div className="p-4">
        <QRCode value={contractAddress + ":" + NFTID} />
        </div>
      </div>
    )}
  </Popup>


  <Popup
    trigger={<button className="mt-4 flex items-center justify-center rounded-xl border-4 border-black bg-red-500 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50"> Refill </button>}
    modal
  >
    {close => (
      <div className="drop-shadow-4xl modal bg-white p-8 rounded-xl">

        <div className="header font-bold text-4xl m-3 text-center" > Refill </div>

<div className="p-4">

  <input
    type="email"
    id="UserEmail"
    value={refillAmt}
    onChange={(e) => setRefillAmount(e.target.value) }
    placeholder="$10"
    class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-m mb-8 p-3"
  />


<center>
<a
  class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
  href="#"
>
  <span
    class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
    onClick={refill}
  >
    Refill
  </span>
</a>
</center>


        </div>
      </div>
    )}
  </Popup>


   </div>
 
  </div>
</a>
    )
}