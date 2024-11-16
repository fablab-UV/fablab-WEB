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
          objectFit="cover"
          className="object-center object-cover"
        />
        {slide.title != null && slide.description != null ? (
          <div className="absolute inset-0 md:flex justify-end  flex-col w-full h-full p-4 hidden ">
            <div className="px-10 mx-24 pb-4 ">
              <div className="w-[65vh] bg-white px-10 py-2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <h1 className=" text-4xl font-bold my-5">{slide.title}</h1>
                <p className="text-base mb-7">{slide.description}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Link>
  )
}

export default SlideItem
