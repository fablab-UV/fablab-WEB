export interface IEvent {
  id: string // Identificador único del evento (puede ser un UUID)
  title: string // Título del evento
  description: string // Descripción detallada del evento
  isPublic: boolean // Indica si el evento acepta público o no
  category: string // Categoría a la que pertenece el evento (ej. 'Taller', 'Conferencia')
  location: string // Ubicación del evento
  institution: string // Institución que dicta el evento
  date: string // Fecha del evento en formato ISO
  time: string // Hora del evento (puede ser un string o Date)
}
