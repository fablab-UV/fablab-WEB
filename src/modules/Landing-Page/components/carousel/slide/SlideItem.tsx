import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { type SlideProps } from '../../../interfaces/slide-props.interface'

const SlideItem: React.FC<{ slide: SlideProps }> = ({ slide }) => {
  const { title, description, url, image, loaded } = slide
  return (
    <Link href={url}>
      <div
        className={`keen-slider__slide flex  transition-opacity duration-200 cursor-pointer ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <Image
          src={image}
          alt={`Imagen de ${title}`}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 ">
          {' '}
          {/* Esto asegura que el texto esté por encima de la imagen */}
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default SlideItem
