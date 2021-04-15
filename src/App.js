import React, { useState, useEffect } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // setText(
    //   data.map((cada, idx) => {
    //     if (idx < count) return cada
    //   }),
    // )
    setText(data.slice(0, count))
  }
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => {
            let totalMsgs = +e.target.value
            const qtt =
              totalMsgs <= 0
                ? 1
                : totalMsgs >= data.length
                ? data.length
                : totalMsgs
            setCount(qtt)
          }}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </article>
    </section>
  )
}

export default App
