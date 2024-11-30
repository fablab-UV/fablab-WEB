/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

import { type IProjectCard } from '@/modules/proyectos/interfaces/project.interface'

interface IProjectCardProps {
  className?: string
  project: IProjectCard
}

const ProjectCard: React.FC<IProjectCardProps> = (props) => {
  const { project, className } = props

  const { title, description, img, href } = project

  return (
    <Link className={`${className}`} href={href}>
      <section className="">
        <img
          src={img}
          alt={title}
          className="w-full object-cover rounded-lg min-h-48 max-h-48"
        />
        <div className="pt-1">
          <h2 className="font-medium text-md md:text-lg mb-1">{title}</h2>
          <p className="text-sm lg:text-md">{description}</p>
        </div>
      </section>
    </Link>
  )
}

export { ProjectCard }
