import React from 'react'
import { MainLayout } from '@/layouts/main-layout/MainLayout'

import nosotrosData from './data/nosotros.json'

import { Slider } from '@/components/common/slider/Slider'

const Nosotros: React.FC = () => {
  return (
    <MainLayout>
      <Slider data={nosotrosData} />
    </MainLayout>
  )
}

export { Nosotros }
