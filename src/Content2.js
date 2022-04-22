import React from 'react'
import ItemList from './ItemList'

function Content2({ items, handleCheck, handleDelete }) {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        ></ItemList>
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty</p>
      )}
    </>
  )
}

export default Content2
