'use client'

import React from 'react'
import { DesktopUpcomingEventCard } from '../cards'
import { type IEvent } from '@/interfaces/events/event.interface'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { sortEventsByDateTime } from '../../utils/sortEventsByDateTime'

interface IDesktopUpcomingEventListProps {
  className?: string
  events: IEvent[]
}

const DesktopUpcomingEventList: React.FC<IDesktopUpcomingEventListProps> = (
  props
) => {
  const { className, events } = props

  const sortedEvents = sortEventsByDateTime(events)

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 15
    },
    loop: false,
    created: () => {}
  })

  return (
    <div ref={sliderRef} className={`${className} keen-slider w-full`}>
      {sortedEvents.map((event, index) => {
        return (
          <div
            key={index}
            className="keen-slider__slide flex-shrink-0 snap-start"
          >
            <DesktopUpcomingEventCard {...event} />
          </div>
        )
      })}
    </div>
  )
}

export default DesktopUpcomingEventList
