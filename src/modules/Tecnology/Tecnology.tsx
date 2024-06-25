import React from 'react'
import technologyData from '@/data/technologyData.json'
import TechnologyList from './components//TechnologyList'

const Tecnology: React.FC = () => {
  return <TechnologyList tecnologias={technologyData.tecnologias} />
}

export default Tecnology
