import React from 'react'
import { type IProjectCard } from '../interfaces/project.interface'

import { ProyectList } from '../components/list/ProyectList'
import { Slider } from '@/components/common/slider/Slider'

import proyectosData from '../data/proyectos.json'

import { LeftSidebar } from '../components/lefftSidebar/LeftSidebar'
import { getUniqueCategories } from '../utils/getUniqueCategories'

interface ProyectViewProps {
  proyectos: IProjectCard[]
}

const ProyectView: React.FC<ProyectViewProps> = (props) => {
  const { proyectos } = props

  const categories = proyectos.map((proyecto) => proyecto.category)

  const uniqueCategories = getUniqueCategories(categories)

  return (
    <section className="min-h-screen pb-16">
      <Slider className="h-[65vh]" data={proyectosData} />

      <section className="pt-8 px-8 flex">
        <LeftSidebar
          className="flex h-full pr-8"
          categories={uniqueCategories}
        />
        <ProyectList projects={proyectos} />
      </section>
    </section>
  )
}

export { ProyectView }
