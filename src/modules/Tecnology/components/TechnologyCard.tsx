import React from 'react'

interface Tecnologia {
  titulo: string
  descripcion: string
  img: string
}

const TechnologyCard: React.FC<Tecnologia> = ({ titulo, descripcion, img }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-4 w-64 shadow-lg text-center">
      <img
        src={img}
        alt={titulo}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{titulo}</h2>
      <p className="text-gray-600">{descripcion}</p>
    </div>
  )
}

export default TechnologyCard
