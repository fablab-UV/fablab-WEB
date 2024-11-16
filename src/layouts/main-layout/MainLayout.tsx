// src/layouts/MainLayout.jsx
import React from 'react'

// TODO Arreglar importaciones
import DesktopHeader from './components/header/desktop-header/DesktopHeader'
import MobileHeader from './components/header/mobile-header/MobileHeader'

import { Footer } from './components/footer'
import { NavBar } from './components/navbar'
import { TopBar } from './components/top-bar'

interface RootLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <header className="hidden md:block">
        <TopBar />
        <DesktopHeader />
        <NavBar />
      </header>
      <header className="block md:hidden">
        <MobileHeader />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export { MainLayout }
