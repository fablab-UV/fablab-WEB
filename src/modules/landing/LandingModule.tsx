import React from 'react'

import { MainLayout } from '@/layouts/main-layout/MainLayout'

import { Slider } from '@/components/common/slider/Slider'

import slideData from './data/carouselData.json'

import 'keen-slider/keen-slider.min.css'
import Contact from '@/modules/contacts/Contact'
import { UpcomingEventsModule } from './components/upcoming-events/UpcomingEventsModule'
import LandingAboutUsView from '@/modules/nosotros/views/LandingAboutUsView'

const LandingModule: React.FC = () => {
  return (
    <MainLayout>
      <div className="w-full">
        <Slider className="md:h-[45vh] lg:h-[65vh]" data={slideData} />
        <LandingAboutUsView />
        <UpcomingEventsModule className="py-6 bg-[#210a3e] text-white" />

        <Contact />
      </div>
    </MainLayout>
  )
}

export { LandingModule }
