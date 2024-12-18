import React from 'react'

import nosotrosData from '../data/nosotros.json'

import { Slider } from '@/components/common/slider/Slider'

const AboutUsView: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Slider data={nosotrosData} />
    </div>
  )
}

export { AboutUsView }
