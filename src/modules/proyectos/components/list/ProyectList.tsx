import React from 'react'

import { ProjectCard } from '../cards/ProjectCard'
import { type IProjectCard } from '@/modules/proyectos/interfaces/project.interface'

interface ProyectListProps {
  className?: string
  proyects: IProjectCard[]
}

const ProyectList: React.FC<ProyectListProps> = (props) => {
  const { proyects, className } = props

  return (
    <div className={`${className} flex flex-wrap justify-start`}>
      {proyects.map((proyect, index) => (
        <div key={index} className="w-1/2 lg:w-1/3 2xl:w-1/4 3xl:w-1/5 p-2">
          <ProjectCard
            titulo={proyect.title}
            descripcion={proyect.description}
            img={proyect.img}
            href={proyect.href}
          />
        </div>
      ))}
    </div>
  )
}

export { ProyectList }
