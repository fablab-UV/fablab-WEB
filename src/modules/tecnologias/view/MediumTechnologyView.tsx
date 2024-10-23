import React from 'react'

import { MediumTechnologyList } from '../components/list'
import { MediumTechnologyHeader } from '../components/header'

import { tecnologias } from '@/data/tecnologias/data.json'
import { type ITechnology } from '@/interfaces/technologies/technology.interfaces'

const MediumTechnologyView: React.FC = () => {
  const technologies: ITechnology[] = tecnologias

  return (
    <div className="min-h-screen">
      <div className="mt-8 px-44">
        <MediumTechnologyHeader />
        <section>
          <MediumTechnologyList technologies={technologies} />
        </section>
      </div>
    </div>
  )
}

export default MediumTechnologyView
