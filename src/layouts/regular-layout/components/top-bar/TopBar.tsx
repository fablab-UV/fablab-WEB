import React from 'react'
import linksData from '../data/top-bar/links.json'
import iconsData from '../data/top-bar/icons.json'
import { type LinkInterface } from '../interfaces/link.interface'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiGooglemaps } from 'react-icons/si'

type IconKeys =
  | 'FaFacebookF'
  | 'FaTwitter'
  | 'FaXTwitter'
  | 'FaInstagram'
  | 'FaYoutube'
  | 'SiGooglemaps'

const iconComponents: Record<IconKeys, React.ComponentType> = {
  FaFacebookF,
  FaTwitter,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  SiGooglemaps
}

const TopBar: React.FC = () => {
  const links: LinkInterface[] = linksData.links
  const icons = iconsData.icons
  return (
    <div className="top-bar py-4 p-4">
      <div className="flex flex-col md:flex-row justify-between items-center max-h-4 mx-24 px-10">
        <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="font-medium no-underline text-sm hover:text-gray-400"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex space-x-4">
          {icons.map((icon, index) => {
            const IconComponent = iconComponents[icon.icon as IconKeys]
            return (
              <a
                key={index}
                href={icon.url}
                className="text-3xl no-underline hover:text-gray-400"
              >
                <IconComponent />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TopBar
