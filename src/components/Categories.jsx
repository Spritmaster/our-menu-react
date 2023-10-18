import React from 'react'

function Categories({categories , filtered}) {
  return (
    <div className='btn-wrapper'>
      {categories.map((category  , i)=> {
        return (
          <button type='button' key={i} className="btn" onClick={()=> filtered(category)}>{category}</button>
        )
      })}

    </div>
  )
}

export default Categories