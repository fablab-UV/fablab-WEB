'use client'

import React, { useState } from 'react'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import SlideItem from './slide/SlideItem'

import slideData from '@/data/carousel/layout-carousel.data.json'

interface SliderProps {
  h?: string
}

const Slider: React.FC<SliderProps> = (props) => {
  const [loaded, setLoaded] = useState(false) // Estado para manejar la visibilidad
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    created: () => {
      setLoaded(true) // Cambia el estado a true cuando el slider está listo
    }
  })

  // TODO mejorar esta implementacion, no es escalable, ni correcta, pero es eficaz
  return (
    <div ref={sliderRef} className={`keen-slider lg:h-[${props.h}0vh] w-full`}>
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
