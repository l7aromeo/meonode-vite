import { useMemo } from 'react'
import { store } from '@src/redux/store'
import { type Children, Node, type Theme, ThemeProvider, PortalProvider, PortalHost } from '@meonode/ui'
import { Provider as ReduxProvider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import lightTheme from '@src/constants/themes/lightTheme.ts'
import darkTheme from '@src/constants/themes/darkTheme.ts'

interface WrappersProps {
  children: Children
}

export const Wrapper = ({ children }: WrappersProps) => {
  const theme = useMemo<Theme>(() => {
    // Initialize from localStorage
    const stored = localStorage.getItem('theme')
    return stored === 'dark' ? darkTheme : lightTheme
  }, [])

  return Node(ReduxProvider, {
    store,
    children: ThemeProvider({
      theme,
      children: Node(SnackbarProvider, {
        children: PortalProvider({
          children: Array.isArray(children) ? [...children, PortalHost()] : [children, PortalHost()],
        }),
      }),
    }),
  }).render()
}
