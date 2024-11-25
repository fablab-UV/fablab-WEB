import React from 'react'
import { type IProjectCard } from '../interfaces/project.interface'

import { ProyectList } from '../components/list/ProyectList'
import { Slider } from '@/components/common/carousel'

import proyectosData from '../data/proyectos.json'

import { LeftSidebar } from '../components/lefftSidebar/LeftSidebar'
import { getUniqueCategories } from '../utils/getUniqueCategories'

interface ProyectViewProps {
  proyectos: IProjectCard[]
}

const ProyectView: React.FC<ProyectViewProps> = (props) => {
  const { proyectos } = props

  const categories = proyectos.map((proyecto) => proyecto.category)

  console.log(categories)

  const uniqueCategories = getUniqueCategories(categories)

  return (
    <section className="min-h-screen">
      <Slider vhDynamic="65" slideItemData={proyectosData} />
      <section className="pt-8 pl-6 pr-4 flex space-x-4">
        <LeftSidebar className="pr-2 w-1/3" categories={uniqueCategories} />
        <ProyectList proyects={proyectos} />
      </section>
    </section>
  )
}

export { ProyectView }
