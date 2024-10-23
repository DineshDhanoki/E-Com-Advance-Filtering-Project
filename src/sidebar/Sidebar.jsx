import React from 'react'
import "./Sidebar.css";
import Category from './category/Category';
import Price from './price/Price';
import Colors from './colors/Colors';


function Sidebar() {
  return (
    <>
    <section className="sidebar">
        <div className="logo-conatiner">
            <h1>🛒</h1>
        </div>

<Category/>
<Price/>
<Colors/>

    </section>
    </>
  )
}

export default Sidebar
