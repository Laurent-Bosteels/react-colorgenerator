import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
      <section className='col-md-12'>
        <div className="handle">
        <p className="title">COLOR GENERATOR</p>
        <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group col-md-6 mb-2">
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : 'form-control form-control-sm'}`}
          />
        </div>
          <button className='btn btn-sm' type='submit'>
            submit
          </button>
        </form>
        </div>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
      </div>
      </div>
    </>
  )
}

export default App