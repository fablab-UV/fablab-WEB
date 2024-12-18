// utils.ts

import { type IEvent } from '@/interfaces/events/event.interface'

export function sortEventsByDateTime(events: IEvent[]): IEvent[] {
  return events.sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`).getTime()
    const dateB = new Date(`${b.date}T${b.time}`).getTime()
    return dateA - dateB
  })
}
