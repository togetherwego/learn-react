import React from 'react'

function Content() {
  const handleNameChange = () => {
    const name = ['Firyal', 'Mikasa', 'Eren']
    const int = Math.floor(Math.random() * 3)
    return name[int]
  }
  return (
    <div>
      <p>Hello {handleNameChange()}!</p>
    </div>
  )
}

export default Content
