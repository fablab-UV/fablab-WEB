import React from 'react'
import { Button } from '@/components/ui/button' // Usar el componente de shadcn
import { FaCalendarAlt } from 'react-icons/fa' // Ícono de calendario

const MediumTechnologyHeader: React.FC = () => {
  return (
    <section className="flex justify-between items-center pb-8">
      {/* Título */}
      <h1 className="text-4xl font-semibold">Tecnologías</h1>

      {/* Botón a la derecha */}
      <Button className="flex items-center gap-2 bg-principal-theme text-lg h-full">
        <FaCalendarAlt /> {/* Ícono de calendario */}
        <div>Agenda tu Visita</div>
      </Button>
    </section>
  )
}

export default MediumTechnologyHeader
