'use client' // Indica que este componente se ejecutará del lado del cliente en Next.js.

import React, { useState } from 'react' // Importa React y el hook useState.
import Link from 'next/link' // Importa el componente Link de Next.js para la navegación.
import { Button } from '@/components/ui/button' // Importa un componente Button personalizado.
import menuItems from '@/layouts/main-layout/components/data/navbar/menuItems.json' // Importa los ítems del menú desde un archivo JSON.

const NavBar: React.FC = () => {
  // Define el componente funcional NavBar.

  // Comprueba si hay más de 7 ítems en el menú y lanza un error si es así.
  if (menuItems.length > 7) {
    throw new Error('El menú no puede tener más de 7 ítems.')
  }

  // Define el estado para el ítem actualmente en hover y el ítem seleccionado.
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  let timeoutId: NodeJS.Timeout // Variable para manejar el temporizador.

  // Maneja el evento de mouse al entrar en un ítem.
  const handleMouseEnter = (item: string): void => {
    clearTimeout(timeoutId) // Limpia el temporizador previo para evitar retrasos.
    setHoveredItem(item) // Establece el ítem que está siendo hovered.
  }

  // Maneja el evento de mouse al salir de un ítem.
  const handleMouseLeave = (): void => {
    // Establece un temporizador para cambiar el estado de hoveredItem después de 300 ms.
    timeoutId = setTimeout(() => {
      setHoveredItem(null)
    }, 300)
  }

  // Maneja el evento al hacer clic en un ítem.
  const handleItemClick = (item: string): void => {
    setSelectedItem(item) // Establece el ítem seleccionado.
  }

  // Encuentra el ítem actual basado en el hoveredItem.
  const currentItem = menuItems.find((item) => item.name === hoveredItem)

  // Se asegura de que subItems nunca sea undefined.
  const subItems = currentItem?.subItems ?? []

  // Comprueba si hay más de 9 subítems en el ítem actual y lanza un error si es así.
  if (subItems.length > 9) {
    throw new Error('No se pueden tener más de 9 subítems en un ítem del menú.')
  }

  // Establece la clase de altura en base a la cantidad de subítems.
  const heightClass =
    subItems.length === 1
      ? 'h-[65px]'
      : subItems.length === 2
        ? 'h-[130px]'
        : subItems.length === 3
          ? 'h-[195px]'
          : subItems.length === 4
            ? 'h-[260px]'
            : subItems.length === 5
              ? 'h-[325px]'
              : subItems.length === 6
                ? 'h-[390px]'
                : subItems.length === 7
                  ? 'h-[455px]'
                  : subItems.length === 8
                    ? 'h-[520px]'
                    : subItems.length === 9
                      ? 'h-[585px]'
                      : 'h-65'

  return (
    <nav className="bg-[#210a3e] h-[70px] flex items-center justify-between relative hidden lg:flex px-[170px] z-20">
      {/* Comienza la barra de navegación */}
      <div className="flex items-center">
        {/* Mapea los ítems del menú y crea un botón para cada uno */}
        {menuItems.map((item) => (
          <div
            key={item.name} // Asigna una clave única a cada ítem.
            onMouseEnter={() => {
              handleMouseEnter(item.name)
            }} // Maneja el evento de hover.
            onMouseLeave={handleMouseLeave} // Maneja el evento de salir del hover.
            className="relative" // Clase para el posicionamiento relativo.
          >
            <Button
              variant="secondary" // Variante del botón.
              className={`px-[40px] h-[70px] rounded-none
                ${hoveredItem === item.name || selectedItem === item.name ? ' !bg-white text-[#210a3e]' : 'bg-[#210a3e] text-white'}`}
              onClick={() => {
                handleItemClick(item.name)
              }} // Maneja el clic en el botón.
            >
              <Link href={item.href}>{item.name.toUpperCase()}</Link>{' '}
              {/* Enlaza al ítem. */}
            </Button>
            {/* Muestra los subítems si el ítem está siendo hovered */}
            {hoveredItem === item.name && item.subItems != null && (
              <div className="absolute left-0 right-0 top-[70px] bg-white z-20">
                <div className="flex flex-col">
                  {/* Mapea los subítems y crea un enlace para cada uno */}
                  {item.subItems.map((subItem) => (
                    <Link key={subItem.name} href={subItem.href} passHref>
                      <div className="flex justify-start px-4 py-6 cursor-pointer z-10 whitespace-nowrap">
                        <span className="text-[#210a3e] hover:text-[#0d0d0d] transition-colors duration-300 hover:font-bold text-xs ml-6">
                          {subItem.name.toUpperCase()}{' '}
                          {/* Muestra el nombre del subítem en mayúsculas */}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Muestra la barra de separación y el contenedor de subítems si hay un ítem hovered */}
      {hoveredItem != null && currentItem?.subItems != null && (
        <div className="absolute top-[70px] inset-x-0 z-10 bg-white">
          <div className={`${heightClass}`} />{' '}
          {/* Clase de altura dinámica basada en la cantidad de subítems */}
          <div className="h-[1px] bg-gray-300" /> {/* Línea final */}
        </div>
      )}
    </nav>
  )
}

export default NavBar // Exporta el componente NavBar para que pueda ser utilizado en otros lugares.
