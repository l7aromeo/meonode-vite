import { StrictMode } from 'react'
import { Node } from '@meonode/ui'
import Routes from '@src/routes'
import { Wrapper } from '@src/components/Wrapper.ts'
import '@src/assets/global.css'
import { render } from '@meonode/ui/client'

const App = Node(StrictMode, { children: Wrapper({ children: Routes() }) })
render(App, document.getElementById('root')!)
