import React from "react";
import Sidemenu from "../components/Sidemenu";
import { Form, useLoaderData } from "react-router-dom";
import Popup from 'reactjs-popup';
const data = require('../utils/data.json')

export async function eventLoader({ params }) {
    return params.id;
}

export function Event() {

    const id = useLoaderData();
    const { name, description, time, banner } = data[id]

    return (
        <div className="w-full bg-gray-900 h-full p-6">
            <Sidemenu />
            <div className="container mx-auto">
                <section className="flex flex-col gap-12 place-content-center">

                    <div className="flex justify-center">
                        <img className="rounded-2xl h-4/12 w-8/12 object-fit" src={banner}></img>
                    </div>
                    <div className="flex flex-row gap-4 text-white">
                        <div className="w-3/4">
                            <p className="text-4xl ">{name}</p>
                            <p className=""> {description} </p>
                        </div>
                        <div className="flex flex-col p-6 bg-white w-1/4 h-48 drop-shadow-xl rounded-xl">

                            <div>
                                <div className="flex gap-4 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z"/></svg>
                                <p className="text-xl text-black"> Sat 9 Aug 2022</p>
                                </div>
                                <div className="flex gap-4 ">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg>
                                <p className="text-xl text-black">1589 Beacon St</p>
                                </div>

   

                                <Popup
    trigger={                             <button
        type="button"
        class="mt-4 flex w-full items-center justify-center rounded-sm bg-red-600 px-8 py-4"
    >
        <span class="text-sm font-medium"> Buy $199 </span>
        <svg
            class="ml-1.5 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
        </svg>
    </button>}
    modal
  >
    {close => (
      <div className="drop-shadow-4xl modal bg-white p-8 rounded-xl">

        <div className="header font-bold text-3xl m-3 text-center"> Congrats! 🔥  </div>

<div className="p-4 text-center">
        You got the ticket!
        </div>
      </div>
    )}
  </Popup>


                            </div>




                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}