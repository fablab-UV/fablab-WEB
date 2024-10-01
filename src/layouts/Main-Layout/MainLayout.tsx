// src/layouts/MainLayout.jsx
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer'

import { NavBar } from './components/navbar'

interface RootLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
