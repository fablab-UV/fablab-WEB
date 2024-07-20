'use client'

import React, { useState } from 'react'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import SlideItem from './slide/SlideItem'

import slideData from '@/data/carousel/layout-carousel.data.json'

const Slider: React.FC = () => {
  const [loaded, setLoaded] = useState(false) // Estado para manejar la visibilidad
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    created: () => {
      setLoaded(true) // Cambia el estado a true cuando el slider está listo
    }
  })

  return (
    <div ref={sliderRef} className="keen-slider h-[60dvh] lg:h-[74.4dvh]">
      {slideData.map((slide, index) => (
        <SlideItem key={index} slide={{ ...slide, loaded }} />
      ))}
    </div>
  )
}

export default Slider
