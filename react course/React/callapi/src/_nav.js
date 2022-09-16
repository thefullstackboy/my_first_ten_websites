import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilGrid, cilSpeedometer, cilUser } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info-gradient',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Admins',
    to: '/admins',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Referrers',
    to: '/referrers',
    icon: <CIcon icon={cilGrid} customClassName="nav-icon" />,
  },
]

export default _nav
