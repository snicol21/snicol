import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const ThemeChanger = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const renderThemeChange = () => {
    if (!mounted) return null

    const currentTheme = theme === "system" ? systemTheme : theme
    if (currentTheme === "dark") {
      return <MoonIcon className="w-7 h-7 text-blue-500" role="button" onClick={() => setTheme("light")} />
    } else {
      return <SunIcon className="w-7 h-7 text-yellow-500" role="button" onClick={() => setTheme("dark")} />
    }
  }

  return <div>{renderThemeChange()}</div>
}

export default ThemeChanger
