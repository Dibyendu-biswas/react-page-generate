import React, { useState } from 'react'
import data from "./data"
const App = () => {
  const [count,setCount]=useState(0)
  const [text,setText]=useState([])

  const handeler=(e)=>{
    e.preventDefault()
    let amount =parseInt(count)
    if(count<=0){
      amount = 1
    }
    if(count > 8){
      amount=8
    }
    setText(data.slice(0,amount))
  }
  return (
    <section className='section-center'>
      <h3>paragraph generate</h3>
      <form className='lorem-form' onSubmit={handeler}>
        <label htmlFor="InputValue" value={count}>pagenerate</label>
        <input type="number" id='InputValue' onChange={(e)=>setCount(e.target.value)} />
        <button type='submit' className='btn'>click</button>
      </form>
    <article className='lorem-text'>
    {
      text.map((item,index)=>{
      
        return <p key={index}>{item}</p>
      })
    }
    </article>
    </section>
  )
}

export default App