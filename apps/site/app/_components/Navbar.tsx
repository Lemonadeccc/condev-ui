import Link from 'next/link'

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
    link: "/component",
  },
  {
    name: "Contact",
    link: "https://github.com/Lemonadeccc/condev-ui",
    isExternal: true,
  }
];

export default function Navbar() {
  return (
    <header className="fixed w-[100%] text-white transition-all duration-300 ease-in-out" >
      <div className='flex justify-between items-center w-[100%] p-5 md:w-[700px] md:mx-auto lg:w-[950px] xl:w-[1200px]'>
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
