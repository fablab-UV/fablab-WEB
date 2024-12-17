import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongoose'
import Event from '@/models/event'

interface EventCreate {
  title: string
  description: string
  date: Date
  image?: string
}

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
