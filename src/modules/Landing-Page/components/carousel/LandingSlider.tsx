'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'

const LandingSlider: React.FC = () => {
  const [loaded, setLoaded] = useState(false) // Estado para manejar la visibilidad
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    created: () => {
      setLoaded(true) // Cambia el estado a true cuando el slider está listo
    }
  })

  return (
    <div ref={sliderRef} className="keen-slider h-[60dvh] lg:h-[74.4dvh]">
      <div
        className={`keen-slider__slide number-slide1 bg-red-500 flex items-center justify-center text-white text-2xl transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        Slide 1
      </div>
      <div
        className={`keen-slider__slide number-slide2 bg-blue-500 flex items-center justify-center text-white text-2xl transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        Slide 2
      </div>
      <div
        className={`keen-slider__slide number-slide3 bg-green-500 flex items-center justify-center text-white text-2xl transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        Slide 3
      </div>
    </div>
  )
}

export default LandingSlider
