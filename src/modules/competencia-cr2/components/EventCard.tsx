import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button' // Asegúrate de tener el botón de ShadCN configurado

interface EventCardProps {
  imageUrl: string
  title: string
  description: string
  location: string
}

const EventCard: React.FC<EventCardProps> = ({
  imageUrl,
  title,

  description,
  location
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden p-8 h-[85vh]">
      {/* Imagen del evento */}
      <div className="relative md:w-1/2 md:h-auto ">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          className="object-contain object-center "
        />
      </div>

      {/* Contenido */}
      <div className="hidden md:w-1/2 md:flex flex-col ">
        <div>
          <p className="text-gray-600 text-base mb-6">{description}</p>

          <p className="font-bold">¿Qué experiencia vivirás?</p>

          {/* Lista de características */}
          <ul className="mb-4  space-y-2 pt-6">
            <li className="flex items-center">
              <span className="mr-2 text-pink-fluor">🤖</span> Competencia
              Performática Escolar de Robótica Regional
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-pink-fluor">🔍</span> Expo Ingeniería &
              Tecnología UV + Expo Póster de Arte Generativo
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-pink-fluor">🎶</span> Música,
              Foodtrucks y la mejor energía para compartir
            </li>
          </ul>

          <span>
            ¡Coméntale a tus amigos, corre a inscribirte y eleva tu pasión por
            la tecnología!
          </span>

          <p className="font-bold  mb-4">¡100% GRATIS 🚀!</p>

          <p>
            📍
            <span className="font-bold">Direccion: </span>
            <span className="font-semibold">{location}</span>
          </p>
        </div>

        {/* Botón de acción */}
        <div className="pt-6">
          <Button variant="default" className="w-full header-theme h-12">
            <p className="text-xl p-4">Sé parte del gran día</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export { EventCard }
