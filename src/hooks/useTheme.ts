import { useAppSelector } from '@src/redux/store'
import { useEffect } from 'react'

export const useTheme = () => {
  const theme = useAppSelector(state => state.theme)

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme && currentTheme !== theme.mode) {
      localStorage.setItem('theme', theme.mode)
    }

    document.head.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme.system.base.default)
    const root = document.documentElement
    if (theme.mode === 'dark') {
      root.setAttribute('data-theme', 'dark')
      root.classList.add('dark-theme')
      root.classList.remove('light-theme')
    } else {
      root.setAttribute('data-theme', 'light')
      root.classList.add('light-theme')
      root.classList.remove('dark-theme')
    }
  }, [theme.mode])

  return theme
}
