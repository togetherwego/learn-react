import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Content2 from './Content2'
import './index.css'
import { useState } from 'react'
import AddItem from './AddItem'
import SearchItem from './SearchItem'

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppingList'))
  )
  const [newItem, setNewItem] = useState(' ')
  const [search, setSearch] = useState(' ')

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newItems))
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
  }

  //using usestate to can check the list
  const handleCheck = (id) => {
    console.log(`key: ${id}`)
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setAndSaveItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    //addItem
    addItem(newItem)
    setNewItem('')
    console.log('submitted')
  }

  return (
    <div>
      <Header title="Groceries" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      ></AddItem>
      <SearchItem search={search} setSearch={setSearch} />
      <Content2
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items?.length} />
      {/* <Content/> */}
    </div>
  )
}

export default App
