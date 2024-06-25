// src/layouts/MainLayout.jsx
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer'

interface RootLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
