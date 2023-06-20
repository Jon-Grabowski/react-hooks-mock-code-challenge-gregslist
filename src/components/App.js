import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] =useState("")

  const [items, setItems] = useState([])
  
 
  useEffect(()=>{
    fetch('http://localhost:4000/listings')
    .then(res => res.json())
    .then(data => setItems(data)) 
  }, [])

  function deleteItem(id) {
    const updatedItemList = items.filter(item => item.id !== id )
    setItems(updatedItemList);
  }
  
  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer 
        items={items.filter(item => item.description.toLowerCase().includes(search.toLowerCase()))}
        deleteItem={deleteItem}
        />
    </div>
  );
}

export default App;
