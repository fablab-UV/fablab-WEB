import React, { Suspense, lazy } from 'react'

import { MainLayout } from '@/layouts/main-layout/MainLayout'

import { LoadingSpinner } from '@/components/common/loading'

const MovilView = lazy(
  async () =>
    await import('./views/MovilView').then((module) => ({
      default: module.MovilView
    }))
)

const DesktopView = lazy(
  async () =>
    await import('./views/DesktopView').then((module) => ({
      default: module.DesktopView
    }))
)

const Competencia: React.FC = () => {
  return (
    <MainLayout>
      <article>
        {/*  Vista mediana (Escritorio) */}
        <Suspense fallback={<LoadingSpinner />}>
          <section className="hidden lg:block">
            <DesktopView />
          </section>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <section className="block lg:hidden">
            <MovilView />
          </section>
        </Suspense>
      </article>
    </MainLayout>
  )
}

export { Competencia }
