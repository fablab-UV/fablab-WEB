import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongoose'
import Event from '@/models/event'

interface EventUpdate {
  title?: string
  description?: string
  date?: Date
  image?: string
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  await dbConnect()
  const data: EventUpdate = await request.json()

  try {
    const updatedEvent = await Event.findByIdAndUpdate(params.id, data, {
      new: true,
      runValidators: true
    })
    if (updatedEvent == null) {
      return NextResponse.json(
        { error: 'Evento no encontrado' },
        { status: 404 }
      )
    }
    return NextResponse.json(updatedEvent, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al actualizar el evento' },
      { status: 500 }
    )
  }
}
