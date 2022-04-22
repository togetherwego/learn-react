import Header from './Header'
// import Content from './Content'
import Footer from './Footer'
import Content2 from './Content2'
import './index.css'
import { useState, useEffect } from 'react'
import AddItem from './AddItem'
import SearchItem from './SearchItem'

function App() {
  const API_URL = 'http://localhost:3500/items'

  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setfetchError] = useState(null)
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error('Did not received expected data')
        const listItems = await response.json()
        // console.log(listItems)
        setItems(listItems)
        setfetchError(null)
      } catch (err) {
        // console.log(err.message)
        setfetchError(err.message)
      }
      finally{
        setisLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000)
    // fetchItems()
  }, [])

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
      <main>
        {isLoading  && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        {!fetchError &&  !isLoading &&(
          <Content2
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            // items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
      {/* <Content/> */}
    </div>
  )
}

export default App
