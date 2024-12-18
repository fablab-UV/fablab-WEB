import React from 'react'
import { MainLayout } from '@/layouts/main-layout/MainLayout'

import { AboutUsView } from './views/AboutUsView'

const Nosotros: React.FC = () => {
  return (
    <MainLayout>
      <AboutUsView />
    </MainLayout>
  )
}

export { Nosotros }
