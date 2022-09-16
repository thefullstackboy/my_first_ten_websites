import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
// const Tables2 = React.lazy(() => import('./views/base/tables/Tables2'))
const ReferrerTable = React.lazy(() => import('./views/base/tables/ReferrerTable'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/admins', name: 'Admin', element: Tables, exact: true },
  { path: '/referrers', name: 'Referrer', element: ReferrerTable, exact: true },
]

export default routes
