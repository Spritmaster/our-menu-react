import React from 'react'

function Lists({data}) {

  return (
    <ul className="menu-list">
      {data.map((item)=> {
        const {id,img,title,desc,price} =item
        return (
          <li className="menu-item" key={id}>
          <img src={img} alt="" className="menu-img" />
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