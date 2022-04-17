import React from 'react'

function Footer() {
  const today = new Date()

  return (
    <footer style={{ alignItems: 'flex-end' }} >
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer
