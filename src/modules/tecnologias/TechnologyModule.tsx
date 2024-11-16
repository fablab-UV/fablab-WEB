import React, { Suspense, lazy } from 'react'

import { MainLayout } from '@/layouts/main-layout/MainLayout'

import { LoadingSpinner } from '@/components/common/loading'

const MovilTechnologyView = lazy(
  async () =>
    await import('./views').then((module) => ({
      default: module.MovilTechnologyView
    }))
)

const DesktopechnologyView = lazy(
  async () =>
    await import('./views').then((module) => ({
      default: module.DesktopechnologyView
    }))
)

const TecnologyModule: React.FC = () => {
  return (
    <MainLayout>
      <article>
        {/*  Vista mediana (Escritorio) */}
        <Suspense fallback={<LoadingSpinner />}>
          <section className="hidden lg:block">
            <DesktopechnologyView />
          </section>
        </Suspense>

        {/* Vista pequeña (Móviles) */}
        <Suspense fallback={<LoadingSpinner />}>
          <section className="block lg:hidden">
            <MovilTechnologyView />
          </section>
        </Suspense>
      </article>
    </MainLayout>
  )
}

export default TecnologyModule
