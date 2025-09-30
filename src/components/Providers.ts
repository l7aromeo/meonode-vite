import { StrictMode, useEffect, useLayoutEffect, useState } from 'react'
import { store } from '@src/redux/store'
import { type Children, Node, type NodeElement, type Theme } from '@meonode/ui'
import { Provider as ReduxProvider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import lightTheme from '@src/constants/themes/lightTheme.ts'
import darkTheme from '@src/constants/themes/darkTheme.ts'
import { ThemeProvider as MeoThemeProvider } from '@meonode/ui'

interface ProvidersProps {
  children: NodeElement
}

const ThemeProvider = ({ children }: { children?: Children }) => {
  const [initialTheme, setInitialTheme] = useState<Theme>(lightTheme)
  useLayoutEffect(() => {
    const localTheme = localStorage.getItem('theme') || 'light'
    setInitialTheme(localTheme === 'dark' ? lightTheme : darkTheme)
  }, [])

  return MeoThemeProvider({ theme: initialTheme, children }).render()
}

export const Providers = ({ children }: ProvidersProps) =>
  Node(ReduxProvider, { store, children: Node(ThemeProvider, { children: Node(SnackbarProvider, { children }) }) })

const PortalThemeProvider = ({ children }: { children?: Children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize from localStorage
    const stored = localStorage.getItem('theme')
    return stored === 'dark' ? darkTheme : lightTheme
  })

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        setTheme(e.newValue === 'dark' ? darkTheme : lightTheme)
      }
    }

    // Listen for changes from other tabs/windows
    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return MeoThemeProvider({ theme, children }).render()
}

export const PortalProviders = Node(StrictMode, { children: Node(ReduxProvider, { store, children: Node(PortalThemeProvider) }) })
