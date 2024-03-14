import {
  Navigate,
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Users } from '../pages/Users'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/users',
    element: <Users/>
  },
  {
    path: '/*',
    element: <Navigate to={'/'} replace />
  }
])

export const BrowserRouterComponent = () => { 
  return (
    <RouterProvider router={router} />
  )
}