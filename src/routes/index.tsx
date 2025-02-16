import { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from '@/keys/routes'
import { ErrorPage as Error } from '@/pages/Error'
import { ErrorBoundary } from '@/components/organisms/errorBondary'
import { Layout } from '@/components/templates/Layout'

const StateManagers = lazy(() =>
  import('@/pages/StateManagers').then((module) => ({
    default: module.StateManagers,
  })),
)

const CompoundPattern = lazy(() =>
  import('@/pages/CompoundPattern').then((module) => ({
    default: module.CompoundPattern,
  })),
)

const NotFound = lazy(() =>
  import('@/pages/NotFound').then((module) => ({
    default: module.NotFound,
  })),
)

export const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <CompoundPattern /> },
        { path: ROUTES.COMPOUND_PATTERN, element: <CompoundPattern /> },
        { path: ROUTES.STATE_MANAGERS, element: <StateManagers /> },
        {
          path: ROUTES.ERROR_BOUNDARY,
          element: (
            <ErrorBoundary>
              <Error />
            </ErrorBoundary>
          ),
        },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]

  const options = {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }

  const router = createBrowserRouter(routes, options)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
