import React from 'react'
import { MainLayout } from '@/layouts/main-layout/MainLayout'
import { ProjectModule } from '@/modules/proyectos/ProjectModule'

const ProyectosPage: React.FC = () => {
  return (
    <MainLayout>
      <ProjectModule />
    </MainLayout>
  )
}

export default ProyectosPage
