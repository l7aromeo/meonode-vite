import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Node } from '@meonode/ui'
import Routes from '@src/routes'
import { Providers } from '@src/components/Providers.ts'
import '@src/assets/global.css'

createRoot(document.getElementById('root')!).render(Node(StrictMode, { children: Providers({ children: Routes() }) }).render())
