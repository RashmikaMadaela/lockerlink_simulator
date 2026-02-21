import { useState } from 'react'
import './App.css'
import Keypad from './components/Keypad'

function App() {
  const [lock, setLock] = useState(true)

  return (
    <>
      <h1>{lock ? "Door Locked" : "Door Unlocked"}</h1>
      <div className="card">
        {!lock && <button onClick={() => setLock((lock) => !lock)}>Lock Door</button>}
      </div>
      <div>
        <Keypad currentStatus={lock} setCurrentStatus={setLock} />
      </div>
    </>
  )
}

export default App
