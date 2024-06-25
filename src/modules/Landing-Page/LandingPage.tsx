import React from 'react'

// Import del layout
import MainLayout from '@/layouts/Main-Layout/MainLayout'
import YoutubeVideo from '../youtube-video/YoutubeVideo'

const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <div>LandingPage</div>
      <YoutubeVideo />
    </MainLayout>
  )
}

export default LandingPage
