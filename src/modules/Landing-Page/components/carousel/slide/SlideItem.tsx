import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { type SlideProps } from '../../../interfaces/slide-props.interface'

const SlideItem: React.FC<{ slide: SlideProps }> = ({ slide }) => {
  const { title, description, url, image, loaded } = slide
  return (
    <Link href={url}>
      <div
        className={`keen-slider__slide flex transition-opacity duration-200 cursor-pointer ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <Image
          src={image}
          alt={`Imagen de ${title}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex justify-center flex-col w-full h-full p-4">
          <div className="px-10 mx-24">
            <div className=" w-1/3 ">
              <h1 className="text-white text-4xl font-bold my-5">{title}</h1>
              <p className="text-white text-base mb-7">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SlideItem
