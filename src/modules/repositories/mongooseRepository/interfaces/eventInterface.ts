export interface EventUpdate {
  title?: string
  description?: string
  date?: Date
  image?: string
}
export interface EventCreate {
  title: string
  description: string
  date: Date
  image?: string
}

export interface Event {
  _id: string
  title: string
  description: string
  date: Date
  image: string
}
