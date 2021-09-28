import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Switch } from "@headlessui/react"
import { MoonIcon, SunIcon } from "@heroicons/react/solid"
import { classNames } from "../../../shared/utils/class.util"

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => setTheme(theme), [theme, setTheme])
  useEffect(() => setIsDark(!!(theme === "dark")), [theme, setIsDark])

  const onChangeTheme = () => {
    if (isDark) {
      setTheme("light")
      setIsDark(false)
      return
    }
    setTheme("dark")
    setIsDark(true)
  }

  return (
    <Switch
      checked={isDark}
      onChange={onChangeTheme}
      className={classNames(
        isDark ? "bg-gray-700" : "bg-gray-200",
        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      )}
    >
      <span className="sr-only">Use Theme</span>
      <span
        className={classNames(
          isDark ? "translate-x-5" : "translate-x-0",
          "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
        )}
      >
        <span
          className={classNames(
            isDark ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200",
            "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <SunIcon className="h-4 w-4 text-yellow-500" />
        </span>
        <span
          className={classNames(
            isDark ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100",
            "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <MoonIcon className="h-4 w-4 text-blue-500" />
        </span>
      </span>
    </Switch>
  )
}

export default ThemeChanger
