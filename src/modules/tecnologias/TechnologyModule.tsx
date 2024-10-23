import React, { Suspense, lazy } from 'react'

import { MainLayout } from '@/layouts'
// import { SmallTechnologyView, MediumTechnologyView } from './view'
import { LoadingSpinner } from '@/components/common/loading'

const SmallTechnologyView = lazy(
  async () => await import('./view/SmallTechnologyView')
)
const MediumTechnologyView = lazy(
  async () => await import('./view/MediumTechnologyView')
)

const TecnologyModule: React.FC = () => {
  return (
    <MainLayout>
      <article>
        {/*  Vista mediana (Escritorio) */}
        <Suspense fallback={<LoadingSpinner />}>
          <section className="hidden lg:block">
            <MediumTechnologyView />
          </section>
        </Suspense>

        {/* Vista pequeña (Móviles) */}
        <Suspense fallback={<LoadingSpinner />}>
          <section className="block lg:hidden">
            <SmallTechnologyView />
          </section>
        </Suspense>
      </article>
    </MainLayout>
  )
}

export default TecnologyModule
