import { StrictMode, useEffect, useMemo, useState } from 'react'
import { store } from '@src/redux/store'
import { type Children, Node, type NodeElement, type Theme } from '@meonode/ui'
import { Provider as ReduxProvider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import lightTheme from '@src/constants/themes/lightTheme.ts'
import darkTheme from '@src/constants/themes/darkTheme.ts'
import { ThemeProvider as MeoThemeWrapper } from '@meonode/ui'

interface WrappersProps {
  children: NodeElement
}

const ThemeWrapper = ({ children }: { children?: Children }) => {
  const initialTheme = useMemo<Theme>(() => {
    // Initialize from localStorage
    const stored = localStorage.getItem('theme')
    return stored === 'dark' ? darkTheme : lightTheme
  }, [])

  return MeoThemeWrapper({ theme: initialTheme, children }).render()
}

export const Wrapper = ({ children }: WrappersProps) =>
  Node(ReduxProvider, { store, children: Node(ThemeWrapper, { children: Node(SnackbarProvider, { children }) }) })

const PortalThemeWrapper = ({ children }: { children?: Children }) => {
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

  return MeoThemeWrapper({ theme, children }).render()
}

export const PortalWrapper = Node(StrictMode, { children: Node(ReduxProvider, { store, children: Node(PortalThemeWrapper) }) })
