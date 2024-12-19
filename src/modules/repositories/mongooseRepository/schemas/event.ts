import { Schema, model, models } from 'mongoose'

const EventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'El título es obligatorio']
    },
    description: {
      type: String,
      required: [true, 'La descripción es obligatoria']
    },
    date: {
      type: Date,
      required: [true, 'La fecha es obligatoria']
    },
    image: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

// Verificar si el modelo ya existe para evitar sobrescribirlo
const Event = models.Event ?? model('Event', EventSchema)

export default Event
