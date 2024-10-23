import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';

function Card() {
  return (
    <section className="card">
        <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Nike Air Monarch IV" />

        <div className="card-details">
          <h3 className="card-title">Nike Air Monarch IV</h3>
          <section className="card-reviews">
          <AiFillStar color='#d5ab55'/><AiFillStar color='#d5ab55'/><AiFillStar color='#d5ab55'/><AiFillStar color='#d5ab55'/><AiOutlineStar color='#d5ab55'/>
          <span className="total-reviews">123</span>
          </section>

          <section className="card-price">
            <div className="price">
              <del>$300<br/></del> $200
            </div>

            <div className="bag">
            <BsFillBagHeartFill className='bag-icon'/>
            </div>
          </section>
        </div>
      </section>
  )
}

export default Card
