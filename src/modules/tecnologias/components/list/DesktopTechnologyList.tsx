import React from 'react'

import { DesktopTechnologyCard } from '../cards'
import { type ITechnology } from '@/interfaces/technologies/technology.interfaces'

interface TechnologyListProps {
  technologies: ITechnology[]
}

const MediumTechnologyList: React.FC<TechnologyListProps> = (props) => {
  return (
    <div className="flex flex-wrap justify-start ">
      {props.technologies.map((tech, index) => (
        <div key={index} className="w-1/2 lg:w-1/3 2xl:w-1/4 3xl:w-1/5 ">
          <DesktopTechnologyCard
            titulo={tech.titulo}
            descripcion={tech.descripcion}
            img={tech.img}
            href={tech.href}
          />
        </div>
      ))}
    </div>
  )
}

export default MediumTechnologyList
