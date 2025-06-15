import type { ComponentType, LazyExoticComponent } from 'react'
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Home = lazy(() => import('@/pages/Home/Home'))
const Posts = lazy(() => import('@/pages/Posts/Posts'))

const withSuspense = (
  Component: LazyExoticComponent<ComponentType<unknown>>
) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(Home),
  },
  {
    path: '/posts',
    element: withSuspense(Posts),
  },
])
