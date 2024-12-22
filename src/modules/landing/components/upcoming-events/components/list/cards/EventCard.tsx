import React from 'react'
import { MapPinIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import { type IEvent } from '@/interfaces/events/event.interface'
import { Separator } from '@/components/ui/separator'

interface IEventCardProps {
  className?: string
  event: IEvent
}

const EventCard: React.FC<IEventCardProps> = (props) => {
  const {
    date,
    time,
    title,
    institution,
    isPublic,
    category,
    description,
    location
  } = props.event

  const { className } = props

  return (
    <Card className={`${className} pt-6`}>
      <CardContent>
        <div className="flex">
          <div className="flex flex-col items-center justify-center ">
            <div className="text-2xl font-bold text-primary whitespace-nowrap">
              {new Date(date).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'short'
              })}
            </div>
            <div className="text-xl font-medium text-muted-foreground">
              {time}
            </div>
          </div>

          <Separator orientation="vertical" className="h-auto mx-3" />

          <div className="flex-grow overflow-hidden">
            <h3 className=" font-bold text-primary truncate">{title}</h3>
            <div className="flex-grow items-center font-semibold text-muted-foreground my-1 truncate overflow-hidden ">
              {institution}
            </div>
            <div className="flex gap-2 w-full overflow-hidden">
              <Badge
                variant={isPublic ? 'secondary' : 'outline'}
                className="flex-shrink-0 py-1 px-2"
              >
                {isPublic ? 'Publico' : 'Privado'}
              </Badge>
              <Badge variant="outline" className="truncate">
                <div className="overflow-hidden truncate flex-grow">
                  {category}
                </div>
              </Badge>
            </div>
          </div>
        </div>

        <Separator orientation="horizontal" className="w-auto mt-3 mb-3" />

        <p className="line-clamp-2">{description}</p>

        <div className="flex items-center">
          <MapPinIcon className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
          <span className="truncate font-thin">{location}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export { EventCard }
