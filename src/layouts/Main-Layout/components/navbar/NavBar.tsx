"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NavBar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  let timeoutId: NodeJS.Timeout;

  const menuItems = [
    { name: 'NOSOTROS', href: '/', subItems: [
      { name: 'EQUIPO', href: '/Nosotros/Equipo' }, 
      { name: 'ALIANZAS', href: '/Nosotros/Alianzas' },
      { name: 'EQUIPO', href: '/Nosotros/Equipo' }, 
      { name: 'ALIANZAS', href: '/Nosotros/Alianzass' },
      { name: 'EQUIPO', href: '/Nosotros/Equipos' }, 
      { name: 'ALIANZAS', href: '/Nosotros/Alianzass' },
    ]},
    { name: 'COMPETENCIA CR^2', href: '/Competencia' },
    { name: 'PROYECTOS', href: '/Proyectos', subItems: [
      { name: 'NOTICIAS Y PUBLICACIONES', href: '/Proyectos/Noticias+Publicaciones' },
      { name: 'CONTACTO', href: '/Proyectos/Contacto' },
    ]},
    { name: 'PASANTÍAS', href: '/Pasantías' },
  ];

  const handleMouseEnter = (item: string) => {
    clearTimeout(timeoutId);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setHoveredItem(null), 300);
  };

  const currentItem = menuItems.find(item => item.name === hoveredItem);

  return (
    <nav className="bg-[#210a3e] h-[70px] flex items-center justify-between px-[170px] relative">
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
              className={`px-[40px] h-[70px] transition-transform duration-200 rounded-none
                ${hoveredItem === item.name ? ' !bg-white text-[#210a3e]' : 'bg-[#210a3e] text-white'}`}
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>

            {hoveredItem === item.name && item.subItems && (
              <div className="absolute left-0 right-0 top-[70px] bg-blue-600 z-10">
                <div className="flex flex-col">
                  {item.subItems.map(subItem => (
                    <Link key={subItem.name} href={subItem.href} passHref>
                      <div className="flex justify-start px-4 py-6 cursor-pointer z-10 whitespace-nowrap" >
                        <span className="text-[#210a3e] hover:text-[#0d0d0d] transition-colors duration-300 hover:font-bold text-xs ml-6 ">
                          {subItem.name}
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

      {/* Barra por todo el ancho de la pantalla */}
      {hoveredItem && currentItem && currentItem.subItems && (
        <div
          className="fixed inset-x-0 top-[150px] bg-white z-9"
          style={{ height: `${currentItem.subItems.length * 40}px` }}
        />
      )}
    </nav>
  );
}

export default NavBar;
