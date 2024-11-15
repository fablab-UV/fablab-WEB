import React from 'react'
import { MainLayout } from '@/layouts/main-layout/MainLayout'

import nosotrosData from './data/nosotros.json'

import { Slider } from '@/components/common/carousel'

const Nosotros: React.FC = () => {
  return (
    <MainLayout>
      <Slider vhDynamic="65" slideItemData={nosotrosData} />
    </MainLayout>
  )
}

export { Nosotros }
