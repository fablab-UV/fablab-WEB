import React from 'react'

import { type IEvent } from '@/interfaces/events/event.interface'

import { EventHeader } from '../components/header/EventHeader'
import { EventList } from '../components/list/EventList'

interface IUpcomingEventsViewProps {
  className?: string
  events: IEvent[]
}

const UpcomingEventsView: React.FC<IUpcomingEventsViewProps> = (props) => {
  const { className, events } = props

  return (
    <section className={`${className}`}>
      <EventHeader className="px-14" />
      <EventList className="mt-4 " events={events} />
    </section>
  )
}

export { UpcomingEventsView }
