import { useState } from "react";
import Navigation from "./navigation/Navigation";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import products from "./db/data"
import Card from "./components/Card";
import './Index.css'

function App() {
const[selectedCategory, setSelectedCategory] = useState(null)
const[query, setQuery] = useState("")

// -----Input Filter-----
const handleInputChange = (e) => {
  setQuery(e.target.value)
}

const filteredItems = products.filter(
  (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
);

// ----Radio Filter-----
const handleChange = (e) => {
  setSelectedCategory(e.target.value)
}

// ----Buttons Filter----
const handleClick = (e) => {
  setSelectedCategory(e.target.value)
}

function filteredData(products, selected, query) {
let filteredProducts = products

// ---Filtering Input Items---
if(query) {
  filteredProducts = filteredItems
}

// ---Selected Filter---
if(selected){
  filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => 
    category === selected || color === selected || company === selected || newPrice === selected || title === selected)
}

return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (<Card key={Math.random()} img={img} title={title} star={star} reviews={reviews} prevPrice={prevPrice} newPrice={newPrice}/>))
}

const result = filteredData(products, selectedCategory, query)

  return (
    <>
    <Sidebar handleChange={handleChange}/>
    <Navigation query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
    </>
  ) 
}

export default App;
