import { useEffect, useState } from 'react'

const useLocalStorage = (key: string, fallbackValue: string) => {
  const [value, setValue] = useState(fallbackValue)
  useEffect(() => {
    const stored = localStorage.getItem(key)
    setValue(stored ? stored : fallbackValue)
  }, [fallbackValue, key])

  useEffect(() => {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)')

    localStorage.setItem(key, value)

    if (value === 'system') {
      localStorage.removeItem(key)
    }

    if (value === 'dark' || (value !== 'light' && systemDark.matches)) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [key, value])

  return { value, setValue }
}

export const useTheme = () => {
  return useLocalStorage('theme', 'system')
}
