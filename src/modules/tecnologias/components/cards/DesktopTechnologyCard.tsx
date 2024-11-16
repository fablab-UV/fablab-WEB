/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

import { type ITechnology } from '@/interfaces/technologies/technology.interfaces'

// TODO  hacer El href opcional si es necesario
const TechnologyMediumCard: React.FC<ITechnology> = (props) => {
  return (
    <Link href={props.href}>
      <div className=" rounded-lg ">
        <div className="border border-gray-200 rounded-lg w-full bg-white">
          <img
            src={props.img}
            alt={props.titulo}
            className="w-full h-48 object-cover rounded-t-lg t "
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {props.titulo}
            </h2>
            <p className="text-gray-600 mb-6">{props.descripcion}</p>
            <span className="text-blue-600 font-medium ">Ver más</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TechnologyMediumCard
