'use client'

import React, { useState, useEffect } from 'react'
import { DesktopUpcomingEventCard } from '../cards'
import { type IEvent } from '@/interfaces/events/event.interface'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { LoadingSpinner } from '@/components/common/loading'

import { sortEventsByDateTime } from '../../utils/sortEventsByDateTime'

interface IDesktopUpcomingEventListProps {
  className?: string
  events: IEvent[]
}

const DesktopUpcomingEventList: React.FC<IDesktopUpcomingEventListProps> = (
  props
) => {
  const { className, events } = props
  const [isLoaded, setIsLoaded] = useState(false)

  const sortedEvents = sortEventsByDateTime(events)

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 15
    },
    loop: false,
    created: () => setIsLoaded(true)
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
    <div className={`${className} w-full`}>
      <div ref={sliderRef} className="keen-slider w-full">
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
    </div>
  )
}

export default DesktopUpcomingEventList
