/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

import { type ITechnology } from '@/interfaces/technologies/technology.interfaces'

const ProjectCard: React.FC<ITechnology> = (props) => {
  return (
    <Link href={props.href}>
      <div className="rounded-lg">
        <img
          src={props.img}
          alt={props.titulo}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="pt-2">
          <h2 className="font-bold text-xl mb-1">{props.titulo}</h2>
          <p className="text-md font-light">{props.descripcion}</p>
          {/* <span className="text-blue-500 font-medium hover:underline">
              ¡Haga click para ver más!
            </span> */}
        </div>
      </div>
    </Link>
  )
}

export { ProjectCard }
