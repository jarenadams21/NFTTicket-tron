import React from "react";
import { Hero } from "../components/Hero";
import Sidemenu from "../components/Sidemenu";

export function Event({ event }) {


    return (
        <div className="w-full">
          <Sidemenu />
          <section className="flex flex-col p-6 ">
            <div className="flex place-content-center">
                <img className="rounded-lg" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F391797869%2F173630631662%2F1%2Foriginal.20221111-171903?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=791fa363d9bff1b6ec305843bb4b2746"></img>
            </div>
            <div>
            <p class="text-2xl ...">The quick brown fox ...</p>
            </div>
          </section>
        </div>
    )
}