import React from 'react'

interface LeftSidebarProps {
  className?: string
  categories: string[]
}

const LeftSidebar: React.FC<LeftSidebarProps> = (props) => {
  const { className, categories } = props
  return (
    <section className={`${className} flex flex-col`}>
      <h2 className="text-2xl font-bold">Categorías</h2>
      <section className="pt-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="text-slate-600 pb-2 cursor-pointer hover:underline"
          >
            {category}
          </div>
        ))}
      </section>
    </section>
  )
}

export { LeftSidebar }
