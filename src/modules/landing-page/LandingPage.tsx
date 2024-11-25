import React from 'react'

// Import del layout
import { MainLayout } from '@/layouts/main-layout/MainLayout'

// Importa los componentes que compondran la vista
import { Slider } from '@/components/common/carousel'

import slideData from './data/carouselData.json'

import 'keen-slider/keen-slider.min.css'
import Contact from '@/modules/contacts/Contact'
import { UpcomingEvents } from '@/modules/landing-page/components/upcoming-events'

const LandingModule: React.FC = () => {
  return (
    <MainLayout>
      <div className="w-full">
        <Slider vhDynamic="65" slideItemData={slideData} />
        <UpcomingEvents />
        <Contact />
      </div>
    </MainLayout>
  )
}

export { LandingModule }