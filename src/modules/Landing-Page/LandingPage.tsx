import React from 'react'

// Import del layout
import MainLayout from '@/layouts/Main-Layout/MainLayout'

// Importa los componentes que compondran la vista
import LandingSlider from './components/carousel/LandingSlider'
import 'keen-slider/keen-slider.min.css'

const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="w-full">
        <LandingSlider />
      </div>
    </MainLayout>
  )
}

export default LandingPage
