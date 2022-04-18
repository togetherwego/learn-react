import React from 'react'

function Footer({length}) {
  const today = new Date()

  return (
    <footer style={{ alignItems: 'flex-end' }} >
      <p>{length} List {length <= 1? 'item': 'items'}</p>
    </footer>
  )
}

export default Footer
