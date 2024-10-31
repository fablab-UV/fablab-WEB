'use client'

import React, { useState } from 'react'

import SlideItem from './slide/SlideItem'
import slideData from '@/data/carousel/layout-carousel.data.json'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

interface SliderProps {
  vhDynamic?: string
}

const Slider: React.FC<SliderProps> = ({ vhDynamic = '100' }) => {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    created: () => {
      setLoaded(true)
    }
  })

  return (
    <div
      ref={sliderRef}
      style={{ height: `${vhDynamic}vh` }} // Aplicando el estilo dinámico aquí
      className="keen-slider w-full"
    >
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
