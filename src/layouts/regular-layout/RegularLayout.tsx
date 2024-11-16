// src/layouts/RegularLayout.jsx
import React from 'react'

// TODO Arreglar importaciones

import MobileHeader from './components/header/mobile-header/MobileHeader'

import { Footer } from './components/footer'
import { NavBar } from './components/navbar'
import { TopBar } from './components/top-bar'

interface RootLayoutProps {
  children: React.ReactNode
}

const RegularLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <header className="hidden md:block">
        <TopBar />
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

export { RegularLayout }
