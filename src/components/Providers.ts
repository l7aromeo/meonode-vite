import { StrictMode } from 'react'
import { store } from '@src/redux/store'
import { Node, type NodeElement } from '@meonode/ui'
import { Provider as ReduxProvider } from 'react-redux'
import { SnackbarProvider } from 'notistack'

interface ProvidersProps {
  children: NodeElement
}

export const Providers = ({ children }: ProvidersProps) => Node(ReduxProvider, { children: Node(SnackbarProvider, { children }), store })

export const PortalProviders = Node(StrictMode, { children: Node(ReduxProvider, { store }) })
