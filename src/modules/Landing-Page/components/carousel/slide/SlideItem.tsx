import React from 'react'

import { type SlideProps } from '../../../interfaces/slide-props.interface'

const SlideItem: React.FC<SlideProps> = ({
  title,
  description,
  url,
  image,
  loaded
}) => {
  return (
    <div
      className={`keen-slider__slide bg-cover bg-center flex items-center justify-center text-black text-2xl transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default SlideItem
