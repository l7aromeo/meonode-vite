import { createBrowserRouter, type RouteObject, RouterProvider } from 'react-router'
import { lazy, Suspense } from 'react'
import { Absolute, Center, Node, type NodeElementType } from '@meonode/ui'
import { CircularProgress } from '@meonode/mui'

type RouteType = Omit<RouteObject, 'children' | 'element'> & {
  element?: NodeElementType
  children?: RouteType[]
}

const routes: RouteType[] = [
  {
    path: '/',
    element: lazy(() => import('@src/pages/App.tsx')),
  },
]

const Fallback = Absolute({ top: 0, left: 0, right: 0, bottom: 0, children: Center({ height: '100%', children: CircularProgress({ size: 50 }) }) }).render()

const wrapElement = (routes: RouteType[]): RouteObject[] => {
  return routes.map(route => ({
    ...route,
    element: route.element ? Node(Suspense, { fallback: Fallback, children: Node(route.element) }).render() : undefined,
    children: route.children ? wrapElement(route.children) : undefined,
  })) as RouteObject[]
}

const router = createBrowserRouter(wrapElement(routes))
const Routes = () => Node(RouterProvider, { router })
export default Routes
