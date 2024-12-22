import { NextResponse } from 'next/server'
import dbConnect from '@/modules/repositories/mongooseRepository/lib/mongoose'
import Event from '@/modules/repositories/mongooseRepository/schemas/event'

export const dynamic = 'force-dynamic' // Evita la generación estática para rutas API

export async function GET(): Promise<NextResponse> {
  await dbConnect()

  try {
    const events = await Event.find({})
    return NextResponse.json(events, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener los eventos' },
      { status: 500 }
    )
  }
}
