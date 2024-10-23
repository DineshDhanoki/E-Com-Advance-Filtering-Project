import { useState } from "react";
import Navigation from "./navigation/Navigation";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import products from "./db/data"

function App() {
const[selectedCategory, setSelectedCategory] = useState(null)

// -----Input Filter-----
const[query, setQuery] = useState("")

const handleInputChange = e => {
  setQuery(e.target.value)
}

const filteredItems = products.filter((product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)

// ----Radio Filter-----
const handleChange = e => {
  setSelectedCategory(e.target.value)
}

// ----Buttons Filter----
const handleClick = e => {
  setSelectedCategory(e.target.value)
}

  return (
    <>
    <Sidebar/>
    <Navigation/>
    <Recommended/>
    <Products/>
    </>
  ) 
}

export default App;
