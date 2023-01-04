import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Type = ({ orderType }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    loadItmes(orderType)
  }, [orderType])

  const loadItmes = async (orderType) => {
    try {
      let response = await axios.get(`http://localhost:4000/${orderType}`)
      console.log(response)
      setItems(response.data)
    } catch (error) {
      console.error(error)
    }

    return (
      <>
        <h2>주문 종류</h2>
        <p>하나의 가격</p>
        <p>총 가격: </p>
        <div
          style={{
            display: "flex",
            flexDirection: orderType === "options" ? "column" : "row"
          }}
        ></div>
      </>
    )
  }
}

export default Type