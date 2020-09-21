import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import CircularProgress from '@sorciere/circular-progress'
import './app.css'

const App = () => {
  const [value, setValue] = useState(0.1)
  const [text, setText] = useState('')

  useEffect(() => {
    setText(`${(value * 100).toFixed(2)}%`)
  }, [value])

  return (
    <div className="app">
      <CircularProgress value={value} text={text} />
      <div className="button-group">
        <button onClick={() => setValue(value + 0.1)}>+</button>
        <button onClick={() => setValue(value - 0.1)}>-</button>
        <button onClick={() => setValue(0)}>reset</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
