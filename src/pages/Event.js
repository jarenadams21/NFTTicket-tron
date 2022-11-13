import React from "react";
import Sidemenu from "../components/Sidemenu";
import { Form, useLoaderData } from "react-router-dom";

const data = require('../utils/data.json')

export async function eventLoader({ params }) {
    return params.id;
  }

export function Event() {

    const id = useLoaderData();
    const { name, description, time, banner} = data[id]

    return (
        <div className="w-full">
          <Sidemenu />
          <section className="flex flex-col p-6 bg-gray-900 place-content-center">
            <div className="flex justify-center">
                <img className="rounded-2xl h-2/3 w-1/3 object-fit" src={banner}></img>
            </div>
            <div className="flex flex-col gap-2 pl-32 p-6 text-white">
                <p className="text-4xl ">{name}</p>
                <p className=""> {time} </p>
                <p className=""> {description} </p>
            </div>
          </section>
        </div>
    )
}