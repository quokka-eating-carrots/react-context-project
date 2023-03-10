import React from 'react'

const Products = ({ name, imagePath, updateItemCount }) => {
  const handleChange = event => {
    const currentValue = event.target.value
    updateItemCount(name, currentValue)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <img style={{ width: "75%" }} src={`http://localhost:4000/${imagePath}`} alt="product" />
      <form style={{ marginTop: "10px" }}>
        <label htmlFor={name} style={{ textAlign: "right" }}>{name}</label>
        <input type="number"
          style={{ marginLeft: 7 }}
          id={name}
          name="quantity"
          min="0"
          defaultValue={0}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default Products