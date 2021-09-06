import Link from "next/link"
import ThemeChanger from "../../elements/buttons/ThemeChanger"

type INavigation = {
  name: string
  href: string
}

const navigation: INavigation[] = [
  // { name: "Scripts", href: "#" }
]

const Header = () => {
  return (
    <header>
      <nav className="max-w-7xl mx-auto" aria-label="Top">
        <div className="w-full px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between md:border-b md:border-primary">
          <Link href="/">
            <a className="text-2xl font-bold uppercase">Spencer Nicol</a>
          </Link>
          <div className="hidden ml-10 space-x-8 md:block">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium hover:text-primary">
                {link.name}
              </a>
            ))}
          </div>
          <ThemeChanger />
        </div>
        <div className="py-1 flex flex-wrap justify-center space-x-6 border-b border-primary bg-gray-200 dark:bg-gray-800 md:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium hover:text-primary">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
