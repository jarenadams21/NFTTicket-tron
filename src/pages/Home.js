import React from "react";
import { Hero } from "../components/Hero";
import Sidemenu from "../components/Sidemenu";

export function Home() {



    return (
        <div className="w-full">
          <Sidemenu />
          <Hero />
          <section className="px-4 sm:px-6 lg:px-8">
          
            

          </section>
        </div>
    )
}