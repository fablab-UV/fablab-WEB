import React from 'react'

interface IEventHeaderProps {
  className?: string
}

const EventHeader: React.FC<IEventHeaderProps> = (props) => {
  const { className } = props

  return (
    <section className={`${className}`}>
      <h2 className="w-full text-3xl font-bold">
        Próximos eventos en el FabLab
      </h2>
    </section>
  )
}

export { EventHeader }
