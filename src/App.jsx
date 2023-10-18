import React, { useState } from 'react'
import Categories from './components/Categories'
import data from './data'
import Lists from './components/Lists'
import "./main.css"

const allCategories =["all" ,... new Set(data.map((item) => item.category))]
console.log(allCategories);
function App() {
  const [items, setItems]= useState(data)
  const [categories ,setCategories] =useState(allCategories)

  function filterFunc(category){
    if(category==="all"){
      setItems(data)
    }
    else{
      const foodFilter =data.filter((item)=> {
        return category === item.category
      })
      setItems(foodFilter)
    }
  }


  return (
   <main >
    <h1 className="title">Our Menu</h1>
    <Categories categories={allCategories} filtered={filterFunc}/>
   <Lists data={items}/>

   </main>
  )
}

export default App