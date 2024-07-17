import React from 'react'
import Image from 'next/image'
import headerData from '../../data/header/header-data.json'

const DesktopHeader: React.FC = () => {
  const { school, faculty, logoPath } = headerData

  return (
    <div className="h-36 max-h-36 header-theme p-5 ">
      <div className="flex justify-between px-10 lg:mx-32 items-center">
        <div className="relative h-24 w-64 flex ">
          <Image
            src={logoPath}
            alt="Logo Fablab"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="text-right flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold">{school}</h2>
          <p className="text-2xl">{faculty}</p>
        </div>
      </div>
    </div>
  )
}

export default DesktopHeader
