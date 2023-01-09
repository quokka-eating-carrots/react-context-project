import React, { useState, useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'

const SummaryPage = ({ setStep }) => {
  const [orderData] = useContext(OrderContext)
  const [checked, setChecked] = useState(false)

  const hasOptions = orderData.options.size > 0
  let optionsDisplay = null
  if (hasOptions) {
    const optionsArray = Array.from(orderData.options.keys())
    const optionList = optionsArray.map(key => <li key={key}>{key}</li>)
    optionsDisplay = (
      <>
        <h2>옵션: {orderData.totals.options}</h2>
        <ul>{optionList}</ul>
      </>
    )
  }
  const productArray = Array.from(orderData.products)
  const productList = productArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ))

  const handleSubmit = event => {
    event.preventDefault()
    setStep(2)
  }
  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품: {orderData.totals.products}</h2>
      <ul>{productList}</ul>
      {optionsDisplay}
      <form onSubmit={handleSubmit}>
        <input type="checkbox"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
          id="confirm-checkbox"
        />{" "}
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button disabled={!checked} type="submit">주문 확인</button>
      </form>
    </div>
  )
}

export default SummaryPage