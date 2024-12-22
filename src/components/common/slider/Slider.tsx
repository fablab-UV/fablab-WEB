/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import React from 'react'
import SlideItem from './slide/SlideItem'
import 'keen-slider/keen-slider.min.css'
import { type SlideProps } from './interfaces/slider.interface'

import { useAutoScrollSlider } from './hooks/useAutoScrollSlider'

interface SliderProps {
  className?: string
  variant?: string
  data: SlideProps[]
}

const Slider: React.FC<SliderProps> = (props) => {
  const { data, className, variant = 'default' } = props

  const sliderRef = useAutoScrollSlider({
    options: { mode: 'snap' },
    slideCount: data.length,
    autoScrollTime: 3000
  })

  const variantComponentMap: Record<string, React.FC<{ slide: SlideProps }>> = {
    default: SlideItem
  }

  const SlideComponent =
    variantComponentMap[variant] || variantComponentMap.default

  return (
    <section
      ref={sliderRef}
      className={`${className} keen-slider w-full bg-black `}
    >
      {data.map((slide, index) => (
        <div className="bg-black" key={index}>
          <SlideComponent slide={slide} />
        </div>
      ))}
    </section>
  )
}

export { Slider }
