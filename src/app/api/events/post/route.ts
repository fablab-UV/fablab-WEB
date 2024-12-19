import { NextResponse } from 'next/server'
import dbConnect from '@/modules/repositories/mongooseRepository/lib/mongoose'
import Event from '@/modules/repositories/mongooseRepository/schemas/event'
import { type EventCreate } from '@/modules/repositories/mongooseRepository/interfaces/eventInterface'

export async function POST(request: Request): Promise<NextResponse> {
  await dbConnect()
  const data: EventCreate = await request.json()

  try {
    // Crear un nuevo evento
    const event = new Event(data)
    await event.save()

    return NextResponse.json(event, { status: 201 }) // 201 para recurso creado
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear el evento' },
      { status: 500 }
    )
  }
}
