import React from 'react'

interface LeftSidebarProps {
  className?: string
  categories: string[]
}

const LeftSidebar: React.FC<LeftSidebarProps> = (props) => {
  const { className, categories } = props
  return (
    <section className={`${className} flex flex-col w-full lg:w-1/3`}>
      <h2 className="text-2xl font-bold">Categorías</h2>
      <section className="pt-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="text-slate-600 w-full pb-2 cursor-pointer hover:underline"
          >
            {category}
          </div>
        ))}
      </section>
    </section>
  )
}

export { LeftSidebar }
