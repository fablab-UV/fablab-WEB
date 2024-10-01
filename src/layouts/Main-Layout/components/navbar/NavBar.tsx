import React from 'react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

const NavBar: React.FC = () => {
  // TODO: Implementar mapa de navegacion

  return (
    <nav className="bg-purple-700">
      <div className="mx-20 h-14">
        <div>
          <Button variant="secondary" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
