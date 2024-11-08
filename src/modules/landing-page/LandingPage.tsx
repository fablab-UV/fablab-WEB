import React from 'react'

// Import del layout
import { MainLayout } from '@/layouts'

// Importa los componentes que compondran la vista
import { Slider } from '@/components/common/carousel'
import 'keen-slider/keen-slider.min.css'
import { UpcomingEvents } from '@/modules/landing-page/components/upcoming-events'

const LandingModule: React.FC = () => {
  return (
    <MainLayout>
      <div className="w-full">
        <Slider vhDynamic="65" />
        <UpcomingEvents />
      </div>
    </MainLayout>
  )
}

export { LandingModule }
