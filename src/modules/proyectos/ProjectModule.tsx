import React from 'react'

import proyectos2023Data from './data/2023.json'
import proyectos2024Data from './data/2024.json'

import { ProyectView } from './view/ProjectView'
import { type IProjectCard } from './interfaces/project.interface'

const ProjectModule: React.FC = () => {
  const proyectos: IProjectCard[] = [...proyectos2023Data, ...proyectos2024Data]

  return <ProyectView proyectos={proyectos} />
}

export { ProjectModule }
