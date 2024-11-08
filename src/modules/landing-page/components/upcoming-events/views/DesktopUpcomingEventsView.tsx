import React from 'react'

import { type IEvent } from '@/interfaces/events/event.interface'

import { DesktopUpcomingEventList } from '../components/list'

interface IDesktopUpcomingEventsViewProps {
  className?: string
  events: IEvent[]
}

const DesktopUpcomingEventsView: React.FC<IDesktopUpcomingEventsViewProps> = (
  props
) => {
  const { className, events } = props

  return (
    <div className={`${className} p-4`}>
      <DesktopUpcomingEventList events={events} />
    </div>
  )
}

export default DesktopUpcomingEventsView
