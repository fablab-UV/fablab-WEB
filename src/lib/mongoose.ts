import mongoose from 'mongoose'

const MONGODB_URI =
  process.env.MONGO_URI ?? 'mongodb://mongo:27017/fablab-web-mongodb'

if (MONGODB_URI == null) {
  throw new Error('Por favor define la variable MONGODB_URI en tu archivo .env')
}

/* Global cache para reutilizar la conexión en desarrollo */
let cached = (global as any).mongoose

if (cached == null) {
  cached = (global as any).mongoose = { conn: null, promise: null }
}

async function dbConnect(): Promise<mongoose.Connection> {
  if (cached.conn != null) {
    return cached.conn
  }

  if (cached.promise == null) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false
      })
      .then((mongoose) => mongoose)
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect
