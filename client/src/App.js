import React from 'react'
import { OrderContext } from './context/OrderContext'
import OrderPage from './pages/OrderPage'
import SummaryPage from './pages/SummaryPage'

function App() {
  return (
    <div style={{ padding: "4rem" }}>
      {/* <SummaryPage /> */}
      <OrderPage />
    </div>
  )
}

export default App