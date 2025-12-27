'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'

interface NavLink {
  name: string;
  link: string;
  isExternal?: boolean;
}

const navLinks: NavLink[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Docs",
    link: "/docs",
  },
  {
    name: "Components",
    link: "/components",
  },
  {
    name: "Contact",
    link: "https://github.com/Lemonadeccc/condev-ui",
    isExternal: true,
  }
];

export default function Navbar() {
  const [isTransparent, setIsTransparent] = useState(true)

  const pathName = usePathname()

	  useEffect(() => {
	    setIsTransparent(pathName === '/')
	  }, [pathName])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ease-in-out ${!isTransparent
        ? 'bg-black border-b border-white/10'
        : 'bg-transparent'
        }`}
    >
      <div className="mx-5 flex items-center justify-between p-5">
        <Link className='text-2xl font-bold' href="/">CONDEV</Link>

        <nav>
          <ul className='flex items-center space-x-5 md:space-x-10'>
            {
              navLinks.map(({ link, name, isExternal }) => (
                <li key={name}>
                  {isExternal ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {name}
                    </a>
                  ) : (
                    <Link
                      href={link}
                      className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {name}
                    </Link>
                  )}
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}
