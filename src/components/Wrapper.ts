import { useMemo } from 'react'
import { store } from '@src/redux/store'
import { type Children, Node, type Theme, PortalProvider, PortalHost } from '@meonode/ui'
import { Provider as ReduxProvider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import lightTheme from '@src/constants/themes/lightTheme.ts'
import darkTheme from '@src/constants/themes/darkTheme.ts'
import { ThemeProvider as MeoThemeWrapper } from '@meonode/ui'

interface WrappersProps {
  children: Children
}

const ThemeWrapper = ({ children }: { children: Children }) => {
  const theme = useMemo<Theme>(() => {
    // Initialize from localStorage
    const stored = localStorage.getItem('theme')
    return stored === 'dark' ? darkTheme : lightTheme
  }, [])

  return MeoThemeWrapper({ theme, children }).render()
}

export const Wrapper = ({ children }: WrappersProps) =>
  Node(ReduxProvider, {
    store,
    children: Node(ThemeWrapper, {
      children: Node(SnackbarProvider, {
        children: PortalProvider({
          children: Array.isArray(children) ? [...children, PortalHost()] : [children, PortalHost()],
        }),
      }),
    }),
  }).render()
