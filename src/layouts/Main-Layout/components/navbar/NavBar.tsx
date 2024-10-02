"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NavBar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  let timeoutId: NodeJS.Timeout;

  const menuItems = [
    { name: 'Nosotros', href: '/' , subItems: [
      { name: 'Equipo', href: '/Nosotros/Equipo'}, 
      { name: 'Alianzas', href: '/Nosotros/Alianzas' },
    ]},
    { name: 'Competencia CR^2', href: '/Competencia' },
    { name: 'Proyectos', href: '/Proyectos', subItems: [
      { name: 'Noticias y Publicaciones', href: '/Proyectos/Noticias+Publicaciones' },
      { name: 'Contacto', href: '/Proyectos/Contacto' },
    ]},
    { name: 'Pasantías', href: '/Pasantías' },
  ];

  // Manejar la activación del hover
  const handleMouseEnter = (item: string) => {
    clearTimeout(timeoutId);  // Limpia cualquier timeout previo
    setHoveredItem(item);     // Muestra el menú desplegable
  };

  // Manejar la desactivación con un pequeño retraso
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setHoveredItem(null), 300);  // Oculta después de 300ms
  };
  return (
    <nav className="bg-[#210a3e] w-full h-[70px] flex items-center justify-between px-[170px]">
      <div className="flex space-x-4">
        {menuItems.map(item => (
          <div
            key={item.name}
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <Button
              variant="secondary"
              asChild
              className={`px-[50px] h-[70px] transition-transform duration-100 rounded-none
                ${hoveredItem === item.name ? ' !bg-white text-[#210a3e]' : 'bg-[#210a3e] text-white'}`}
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>


            {/* Mostrar subítems al hacer hover */}
            {hoveredItem === item.name && item.subItems && (
              <div className="absolute top-full left-0 mt-2 bg-white"
              onMouseEnter={() => clearTimeout(timeoutId)}  // Mantiene abierto si estás sobre el menú
              onMouseLeave={handleMouseLeave}               // Se oculta si sales del menú
              >
                {item.subItems.map(subItem => (
                  <Button
                    key={subItem.name}
                    variant="secondary"
                    asChild
                    className="flex justify-center items-center w-full px-20 py-10 hover:bg-[#210a3e] hover:text-white rounded-none"
                    style={{ lineHeight: 'normal' }}  
                  >
                    <Link href={subItem.href} className="flex-1 text-center">
                      {subItem.name}
                    </Link>
                  </Button>
                ))}

              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
