import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongoose'
import Event from '@/models/event'

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
