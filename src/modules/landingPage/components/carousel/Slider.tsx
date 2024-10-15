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
    <div ref={sliderRef} className="keen-slider h-[60vh] lg:h-[70vh] ">
      {slideData.map((slide, index) => (
        <SlideItem
          key={index}
          title={slide.title}
          description={slide.description}
          url={slide.url}
          image={slide.image}
          loaded={loaded}
        />
      ))}
    </div>
  )
}

export default Slider
