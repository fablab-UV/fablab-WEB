import React from 'react'

import { type IEvent } from '@/interfaces/events/event.interface'

import { EventHeader } from '../components/header/EventHeader'
import { EventList } from '../components/list/EventList'

interface IDesktopUpcomingEventsViewProps {
  className?: string
  events: IEvent[]
}

const DesktopUpcomingEventsView: React.FC<IDesktopUpcomingEventsViewProps> = (
  props
) => {
  const { className, events } = props

  return (
    <section className={`${className}`}>
      <EventHeader className="px-14" />
      <EventList className="pt-4 px-14" events={events} />
    </section>
  )
}

export { DesktopUpcomingEventsView }
