import { Home } from '@/pages/Home/Home'
import { Posts } from '@/pages/Posts/Posts'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/posts',
    element: <Posts />,
  },
])
