import { StrictMode } from 'react'
import { Node } from '@meonode/ui'
import Routes from '@src/routes'
import { Providers } from '@src/components/Providers.ts'
import '@src/assets/global.css'
import { render } from '@meonode/ui/client'

const App = Node(StrictMode, { children: Providers({ children: Routes() }) })
render(App, document.getElementById('root')!)
