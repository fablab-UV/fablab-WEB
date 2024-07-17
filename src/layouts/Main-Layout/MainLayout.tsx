// src/layouts/MainLayout.jsx
import React from 'react'
import DesktopHeader from './components/header/desktop-header/DesktopHeader'
import MobileHeader from './components/header/mobile-header/MobileHeader'
import Footer from './components/Footer'
import Topbar from './components/top-bar/TopBar'

interface RootLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="hidden md:block">
        <Topbar />
        <DesktopHeader />
      </div>
      <div className="block md:hidden">
        <MobileHeader />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
