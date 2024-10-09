"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import menuItems from "@/data/menuItems.json"

const NavBar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  let timeoutId: NodeJS.Timeout;
  
  const handleMouseEnter = (item: string): void => {
    clearTimeout(timeoutId);
    setHoveredItem(item);
  };

  const handleMouseLeave = (): void => {
    timeoutId = setTimeout(() => { setHoveredItem(null); }, 300);
  };

  const handleItemClick = (item: string): void=> {
    setSelectedItem(item);
  };

  const currentItem = menuItems.find(item => item.name === hoveredItem);

  /* Items */ 
  return (
    <nav className="bg-[#210a3e] h-[70px] flex items-center justify-between relative">
      <div className="flex items-center justify-between w-full">
        <div className="hidden sm:flex px-[170px]">
          {menuItems.map(item => (
            <div
              key={item.name}
              onMouseEnter={() => { handleMouseEnter(item.name); }}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <Button
                variant="secondary"
                asChild
                className={`px-[40px] h-[70px] rounded-none
                  ${hoveredItem === item.name || selectedItem === item.name ? ' !bg-white text-[#210a3e]' : 'bg-[#210a3e] text-white'}`}
                onClick={() => { handleItemClick(item.name); }} // Manejar clic en ítem para mantenerlo de color blanco al presionarlo
              >
                <Link href={item.href}>{item.name.toUpperCase()}</Link>
              </Button>
              {/* subitems */}                 
              {hoveredItem === item.name && (item.subItems != null) && (
                <div className="absolute left-0 right-0 top-[70px] bg-blue-600 z-10">
                  <div className="flex flex-col">
                    {item.subItems.map(subItem => (
                      <Link key={subItem.name} href={subItem.href} passHref>
                        <div className="flex justify-start px-4 py-6 cursor-pointer z-10 whitespace-nowrap" >
                          <span className="text-[#210a3e] hover:text-[#0d0d0d] transition-colors duration-300 hover:font-bold text-xs ml-6 ">
                            {subItem.name.toUpperCase()}
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
      </div>

      {/* Barra por todo el ancho de la pantalla */}
      {(hoveredItem != null) && ((currentItem?.subItems) != null) && (
        <div
          className="fixed inset-x-0 top-[150px] bg-blue-600 z-9"
          style={{ height: `${currentItem.subItems.length * 65}px` }}
        />
      )}
    </nav>
  );
}

export default NavBar;
