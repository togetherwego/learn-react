import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Content2 from './Content2'
import './index.css'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'armin',
    },
    {
      id: 2,
      checked: false,
      item: 'mikasa',
    },
    {
      id: 3,
      checked: false,
      item: 'eren',
    },
  ])

  //using usestate to can check the list
  const handleCheck = (id) => {
    console.log(`key: ${id}`)
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    // console.log(id);
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  return (
    <div>
      <Header title="Groceries" />
      <Content2
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  )
}

export default App
