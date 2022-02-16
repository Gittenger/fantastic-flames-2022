import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page from './pages/_Page.Component.jsx'

import HomePage from './pages/HomePage.component.jsx'
import ProductionsPage from './pages/ProductionsPage.component.jsx'
import BookingPage from './pages/BookingPage.component.jsx'
import CrewPage from './pages/CrewPage.component.jsx'
import SafetyPage from './pages/SafetyPage.component.jsx'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Page Component={HomePage} />} />
        <Route
          path="/productions"
          exact
          element={<Page Component={ProductionsPage} />}
        />
        <Route
          path="/booking"
          exact
          element={<Page Component={BookingPage} />}
        />
        <Route path="/crew" exact element={<Page Component={CrewPage} />} />
        <Route path="/safety" exact element={<Page Component={SafetyPage} />} />
        <Route
          path="/productions"
          exact
          element={<Page Component={ProductionsPage} />}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes
