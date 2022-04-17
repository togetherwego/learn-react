import React from 'react'

function Content() {
  const handleNameChange = () => {
    const names = ['Firyal', 'Mikasa', 'Eren']
    const int = Math.floor(Math.random() * 3)
    return names[int]
  }

  const handleClick = () => {
    console.log('You clicked it')
  }  
  
  const handleClickTwo = (name) => {
    console.log(`${name} was clicked`)
  }
  const handleClickThree = (e) => {
    console.log(e.target)
  }

  return (
    <div>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click it</button>
      <button onClick={() => handleClickTwo(`firyal`)}>Click it</button>
      <button onClick={(e) => handleClickThree(e)}>Click it</button>
    </div>
  )
}

export default Content
