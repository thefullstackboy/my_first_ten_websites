import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./pages/Dashboard'))
// Pages
const Login = React.lazy(() => import('./pages/Login'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Login Page" element={<Login />} />
             <Route path="/dashboard" name="Home" element={<DefaultLayout />} /> 
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
