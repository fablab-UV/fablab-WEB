import React from 'react'

// Import del layout
import { MainLayout } from '@/layouts'

// Importa los componentes que compondran la vista
import Slider from '@/components/common/carousel/Slider'
import 'keen-slider/keen-slider.min.css'
import Contact from '@/modules/contacts/Contact'

const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="w-full">
        <Slider h="7" />
        <Contact />
      </div>
    </MainLayout>
  )
}

export default LandingPage
