import React from 'react'
import TechnologyCard from './TechnologyCard'

interface Tecnologia {
  titulo: string
  descripcion: string
  img: string
}

interface TechnologyListProps {
  tecnologias: Tecnologia[]
}

const TechnologyList: React.FC<TechnologyListProps> = ({ tecnologias }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {tecnologias.map((tech, index) => (
        <TechnologyCard
          key={index}
          titulo={tech.titulo}
          descripcion={tech.descripcion}
          img={tech.img}
        />
      ))}
    </div>
  )
}

export default TechnologyList
