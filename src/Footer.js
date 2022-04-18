import React from 'react'

function Footer({ length }) {
  return (
    <footer style={{ alignItems: 'flex-end' }}>
      <p>
        {length} List {length <= 1 ? 'item' : 'items'}
      </p>
    </footer>
  )
}

export default Footer
