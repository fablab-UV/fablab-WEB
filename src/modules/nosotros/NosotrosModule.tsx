import React from 'react'
import { MainLayout } from '@/layouts/main-layout/MainLayout'

import { AboutUsView } from './views/AboutUsView'

const NosotrosModule: React.FC = () => {
  return (
    <MainLayout>
      <AboutUsView />
    </MainLayout>
  )
}

export { NosotrosModule }
