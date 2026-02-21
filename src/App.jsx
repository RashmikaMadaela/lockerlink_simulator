import { useState } from 'react'
import './App.css'
import Keypad from './components/Keypad'

function App() {
  const [lock, setLock] = useState(true)

  return (
    <>
      <div>
        <Keypad currentStatus={lock} setCurrentStatus={setLock} />
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
