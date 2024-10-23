import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { type SlideProps } from '@/interfaces/slides/slide.interface'

const SlideItem: React.FC<SlideProps> = (slide) => {
  return (
    <Link href={slide.url}>
      <div
        className={`keen-slider__slide flex transition-opacity duration-200 cursor-pointer`}
      >
        <Image
          src={slide.image}
          alt={`Imagen de ${slide.title}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex justify-center flex-col w-full h-full p-4">
          <div className="px-10 mx-24">
            <div className="w-1/3">
              <h1 className="text-white text-4xl font-bold my-5">
                {slide.title}
              </h1>
              <p className="text-white text-base mb-7">{slide.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SlideItem
