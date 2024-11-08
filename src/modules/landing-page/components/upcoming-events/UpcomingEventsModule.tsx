import React, { Suspense, lazy } from 'react'

import UpcomingEventsData from '@/data/events/events.json'
import { type IEvent } from '@/interfaces/events/event.interface'

import { LoadingSpinner } from '@/components/common/loading'

interface UpcomingEventsModuleProps {
  className?: string
}

const DesktopUpcomingEventsView = lazy(
  async () =>
    await import('./views').then((module) => ({
      default: module.DesktopUpcomingEventsView
    }))
)

const MovilUpcomingEventsView = lazy(
  async () =>
    await import('./views').then((module) => ({
      default: module.MovilUpcomingEventsView
    }))
)

const UpcomingEventsModule: React.FC<UpcomingEventsModuleProps> = (props) => {
  const { className } = props

  const events: IEvent[] = UpcomingEventsData

  return (
    <section className={`${className}w-full h-full`}>
      <article>
        {/*  Vista mediana (Escritorio) */}
        <Suspense fallback={<LoadingSpinner />}>
          <section className="hidden lg:block">
            <DesktopUpcomingEventsView events={events} />
          </section>
        </Suspense>

        {/* Vista pequeña (Móviles) */}
        <Suspense fallback={<LoadingSpinner />}>
          <section className="block lg:hidden">
            <MovilUpcomingEventsView />
          </section>
        </Suspense>
      </article>
    </section>
  )
}

export default UpcomingEventsModule
