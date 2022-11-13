import React from "react";
import { Hero } from "../components/Hero";
import Sidemenu from "../components/Sidemenu";
import ReactMarkdown from 'react-markdown'


export function Event({ name, img, time }) {


    return (
        <div className="w-full">
          <Sidemenu />
          <section className="flex flex-col p-6 bg-gray-900 place-content-center">
            <div className="flex justify-center">
                <img className="rounded-2xl" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F391797869%2F173630631662%2F1%2Foriginal.20221111-171903?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=791fa363d9bff1b6ec305843bb4b2746"></img>
            </div>
            <div className="flex flex-col gap-2 pl-32 p-6 text-white">
                <p className="text-4xl ">{name}</p>
                <p className="">{img}</p>
                <p className=""> {time} </p>
                
            </div>
          </section>
        </div>
    )
}