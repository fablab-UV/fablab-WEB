'use client'

import React, { useState, useEffect } from 'react'
import { EventCard } from './cards/EventCard'
import { type IEvent } from '@/interfaces/events/event.interface'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { LoadingSpinner } from '@/components/common/loading'

import { sortEventsByDateTime } from '../../utils/sortEventsByDateTime'

interface IEventListProps {
  className?: string
  events: IEvent[]
}

const EventList: React.FC<IEventListProps> = (props) => {
  const { className, events } = props
  const [isLoaded, setIsLoaded] = useState(false)

  const sortedEvents = sortEventsByDateTime(events)

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 16
    },
    loop: false,
    mode: 'free',

    created: () => {
      setIsLoaded(true)
    }
  })

  useEffect(() => {
    if (sortedEvents.length > 0) {
      setIsLoaded(true)
    }
  }, [sortedEvents])

  if (!isLoaded) {
    return <LoadingSpinner />
  }

  return (
    <div className={`${className}`}>
      <section ref={sliderRef} className=" keen-slider w-full">
        {sortedEvents.map((event, index) => {
          return (
            <div
              key={index}
              className={`keen-slider__slide w-full ${index === 0 ? 'pl-4' : ''} ${index === sortedEvents.length - 1 ? 'pr-4' : ''}`}
            >
              <EventCard event={event} className="h-full w-full" />
            </div>
          )
        })}
      </section>
    </div>
  )
}

export { EventList }
