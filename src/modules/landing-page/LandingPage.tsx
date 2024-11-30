import React from 'react'

// Import del layout
import { MainLayout } from '@/layouts/main-layout/MainLayout'

// Importa los componentes que compondran la vista
import { Slider } from '@/components/common/slider/Slider'

import slideData from './data/carouselData.json'

import 'keen-slider/keen-slider.min.css'
import Contact from '@/modules/contacts/Contact'
import { UpcomingEventsModule } from './components/upcoming-events/UpcomingEventsModule'

const LandingModule: React.FC = () => {
  return (
    <MainLayout>
      <div className="w-full">
        <Slider className="md:h-[45vh] lg:h-[65vh]" data={slideData} />

        <UpcomingEventsModule className="pt-4" />
        <Contact />
      </div>
    </MainLayout>
  )
}

export { LandingModule }
