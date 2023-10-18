import React from 'react'
import img1 from '../images/item-1.jpeg'
import img2 from '../images/item-2.jpeg'
import img3 from '../images/item-3.jpeg'
import img4 from '../images/item-4.jpeg'
import img5 from '../images/item-5.jpeg'
import img6 from '../images/item-6.jpeg'
import img7 from '../images/item-7.jpeg'
import img8 from '../images/item-8.jpeg'
import img9 from '../images/item-9.jpeg'
import img10 from '../images/item-10.jpeg'

function Lists({data}) {
  const images =[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

  return (
    <ul className="menu-list">
      {data.map((item)=> {
        const {id,img,title,desc,price} =item
        return (
          <li className="menu-item" key={id}>
          <img src={images[id]} alt="" className="menu-img" />
          <div>
            <h2 className="menu-title">{title}</h2>
            <span>${price}</span>
          </div>
          <p className="menu-text">{desc}</p>
        </li>
        )
      })}
    </ul>
  )
}

export default Lists