import { NextResponse } from 'next/server'
import dbConnect from '@/modules/repositories/mongooseRepository/lib/mongoose'
import Event from '@/modules/repositories/mongooseRepository/schemas/event'

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  await dbConnect()

  try {
    const deletedEvent = await Event.findByIdAndDelete(params.id)
    if (deletedEvent === null) {
      return NextResponse.json(
        { error: 'Evento no encontrado' },
        { status: 404 }
      )
    }
    return NextResponse.json({ message: 'Evento eliminado' }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al eliminar el evento' },
      { status: 500 }
    )
  }
}
