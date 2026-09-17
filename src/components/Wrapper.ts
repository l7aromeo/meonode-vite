import { store } from '@src/redux/store'
import { type Children, Node, ThemeProvider, PortalProvider, PortalHost } from '@meonode/ui'
import { Provider as ReduxProvider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import { themeConfig } from '@src/constants/themes/config.ts'
import { themeTokens } from '@src/constants/themes/tokens.ts'

interface WrappersProps {
  children: Children
}

export const Wrapper = ({ children }: WrappersProps) => {
  return Node(ReduxProvider, {
    store,
    /*
     * No `localStorage` read here. The provider owns the stored preference and
     * stamps `data-theme` on `<html>`; reading it separately is a second source
     * of truth that can disagree with the first.
     */
    children: ThemeProvider({
      ...themeConfig,
      tokens: themeTokens,
      children: Node(SnackbarProvider, {
        children: PortalProvider({
          children: Array.isArray(children) ? [...children, PortalHost()] : [children, PortalHost()],
        }),
      }),
    }),
  }).render()
}
