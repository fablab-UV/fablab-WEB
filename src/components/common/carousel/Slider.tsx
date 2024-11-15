'use client'

import React from 'react'
import SlideItem from './slide/SlideItem'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { type SlideProps } from '@/interfaces/slides/slide.interface'

interface SliderProps {
  vhDynamic?: string
  slideItemData: SlideProps[]
}

const Slider: React.FC<SliderProps> = (props) => {
  const { vhDynamic = '65', slideItemData } = props

  // Solo activa el loop si hay más de un elemento
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: slideItemData.length > 1 // Condición para el loop
    },
    [
      (slider) => {
        if (slideItemData.length > 1) {
          // Solo aplica el comportamiento de auto-scroll si hay más de un slide
          let timeout: ReturnType<typeof setTimeout>
          let mouseOver = false

          const clearNextTimeout = (): void => {
            clearTimeout(timeout)
          }

          const nextTimeout = (): void => {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 2000)
          }

          slider.on('created', () => {
            slider.container.addEventListener('mouseover', () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener('mouseout', () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on('dragStarted', clearNextTimeout)
          slider.on('animationEnded', nextTimeout)
          slider.on('updated', nextTimeout)
        }
      }
    ]
  )

  return (
    <div
      ref={sliderRef}
      style={{ height: `${vhDynamic}vh ` }} // Aplicando el estilo dinámico aquí
      className="keen-slider w-full"
    >
      {slideItemData.map((slide, index) => (
        <SlideItem
          key={index}
          title={slide.title}
          description={slide.description}
          url={slide.url}
          image={slide.image}
        />
      ))}
    </div>
  )
}

export default Slider
