import React from 'react'
import ItemList from './ItemList'

function Content2({ items, handleCheck, handleDelete }) {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        ></ItemList>
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty</p>
      )}
    </main>
  )
}

export default Content2
