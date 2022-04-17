import React from 'react'
import { useState } from 'react'

function Content() {
  const [name, setName] = useState('sasha')
  const [count, setCount] = useState(0)

  const handleNameChange = () => {
    const names = ['Firyal', 'Mikasa', 'Eren']
    const int = Math.floor(Math.random() * 3)
    setName(names[int])
  }

  const handleClick = () => {
    setCount(count + 1)
    // setCount(count + 1)
    console.log(count)
  }

  const handleClickTwo = () => {
    console.log(count)
  }

  return (
    <div>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClickTwo}>Click it</button>
    </div>
  )
}

export default Content
