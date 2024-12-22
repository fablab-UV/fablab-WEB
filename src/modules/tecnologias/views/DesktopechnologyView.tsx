import React from 'react'

import { DesktopTechnologyList } from '../components/list'
import { DesktopTechnologyHeader } from '../components/header'

import tecnologias from '../data/tecnologias.json'
import { type ITechnology } from '@/interfaces/technologies/technology.interfaces'

const MediumTechnologyView: React.FC = () => {
  const technologies: ITechnology[] = tecnologias

  return (
    <div className="min-h-screen">
      <div className="mt-8 px-44">
        <DesktopTechnologyHeader />
        <section>
          <DesktopTechnologyList technologies={technologies} />
        </section>
      </div>
    </div>
  )
}

export default MediumTechnologyView
