'use client'

import React, { useState, useEffect } from 'react'
import { EventCard } from '../cards/EventCard'
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
    <section ref={sliderRef} className={`${className} w-full keen-slider`}>
      {sortedEvents.map((event, index) => {
        return (
          <div
            key={index}
            className="keen-slider__slide flex-shrink-0 snap-start"
          >
            <EventCard {...event} />
          </div>
        )
      })}
    </section>
  )
}

export { EventList }
