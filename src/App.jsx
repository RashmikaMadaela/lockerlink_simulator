import { useState } from 'react'
import './App.css'

function App() {
  const [lock, setLock] = useState(true)

  return (
    <>
      <div>
      </div>
      <h1>{lock ? "Door Locked" : "Door Unlocked"}</h1>
      <div className="card">
        <button onClick={() => setLock((lock) => !lock)}>
          {lock ? "Unlock" : "Lock"}
        </button>
      </div>
    </>
  )
}

export default App
