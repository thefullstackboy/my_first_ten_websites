import React from 'react'
import RefsDemo from 'react-dom'

function PortalDemo() {
  return RefsDemo.createPortal(
    <h1>PortalDemo</h1>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo