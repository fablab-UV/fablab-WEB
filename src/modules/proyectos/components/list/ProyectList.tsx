import React from 'react'

import { ProjectCard } from '../cards/ProjectCard'
import { type IProjectCard } from '@/modules/proyectos/interfaces/project.interface'

interface ProyectListProps {
  className?: string
  projects: IProjectCard[]
}

const ProyectList: React.FC<ProyectListProps> = (props) => {
  const { projects, className } = props

  return (
    <section
      className={`${className} grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3`}
    >
      {projects.map((project, index) => (
        <div key={index} className="">
          <ProjectCard project={project} />
        </div>
      ))}
    </section>
  )
}

export { ProyectList }
