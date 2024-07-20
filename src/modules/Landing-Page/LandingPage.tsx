import React from 'react'

// Import del layout
import MainLayout from '@/layouts/Main-Layout/MainLayout'

// Importa los componentes que compondran la vista
import Slider from './components/carousel/Slider'
import 'keen-slider/keen-slider.min.css'

const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="w-full">
        <Slider />
      </div>
    </MainLayout>
  )
}

export default LandingPage
