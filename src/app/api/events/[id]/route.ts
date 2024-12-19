import { NextResponse } from 'next/server'
import dbConnect from '@/modules/repositories/mongooseRepository/lib/mongoose'
import Event from '@/modules/repositories/mongooseRepository/schemas/event'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  await dbConnect()

  try {
    const event = await Event.findById(params.id)
    if (event === null) {
      return NextResponse.json(
        { error: 'Evento no encontrado' },
        { status: 404 }
      )
    }
    return NextResponse.json(event, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener el evento' },
      { status: 500 }
    )
  }
}
