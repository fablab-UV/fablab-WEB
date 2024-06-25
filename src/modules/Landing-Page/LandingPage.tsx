import React from 'react'

// Import del layout
import MainLayout from '@/layouts/Main-Layout/MainLayout'
import Contact from '../contact/Contact'

const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <div>LandingPage</div>
      <Contact />
    </MainLayout>
  )
}

export default LandingPage
