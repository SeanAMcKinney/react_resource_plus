import React from 'react'

export default function SingleCategory(props) {
  return (
    <tr>
        <td>{props.category.CategoryName}</td>
        <td>{props.category.CategoryDescription}</td>
    </tr>
  )
}
