import { NextResponse } from 'next/server'
import dbConnect from '@/modules/repositories/mongooseRepository/lib/mongoose'
import Event from '@/modules/repositories/mongooseRepository/schemas/event'
import { type EventUpdate } from '@/modules/repositories/mongooseRepository/interfaces/eventInterface'

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  await dbConnect()
  const data: EventUpdate = await request.json()

  try {
    const event = await Event.findOneAndUpdate({ _id: params.id }, data, {
      new: true,
      upsert: false, // Evitar crear un nuevo evento si no se encuentra
      runValidators: true
    })

    if (event == null) {
      return NextResponse.json(
        { error: 'Evento no encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json(event, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear o actualizar el evento' },
      { status: 500 }
    )
  }
}
