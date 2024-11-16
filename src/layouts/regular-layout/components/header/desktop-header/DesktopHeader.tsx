import React from 'react'
import Image from 'next/image'
import headerData from '../../data/header/header-data.json'
import Link from 'next/link'

const DesktopHeader: React.FC = () => {
  const { school, faculty, logoPath } = headerData

  return (
    <div className="h-36 max-h-36 header-theme p-4">
      <div className="flex h-full justify-between px-10 items-center mx-24">
        <Link href="/">
          <div className="relative h-24 w-64 flex ">
            <Image
              alt="Logo Fablab"
              src={logoPath}
              priority
              fill
              sizes="(max-width: 600px) 100vw,
            (max-width: 900px) 100vw,
            (max-width: 1200px) 100vw,
            (max-width: 1800px) 80vw,
            2560px"
              className="object-contain aspect-video"
            />
          </div>
        </Link>
        <div className="text-right flex flex-col justify-center h-full ">
          <h2 className="text-4xl font-bold">{school}</h2>
          <p className="text-2xl">{faculty}</p>
        </div>
      </div>
    </div>
  )
}

export default DesktopHeader
