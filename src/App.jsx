import { useState } from 'react'
import './App.css'
import Keypad from './components/Keypad'
import Storage from './components/Storage'

function App() {
  const [lock, setLock] = useState(true)
  const [currentStorage, setCurrentStorage] = useState([])
  const [currentOrder, setCurrentOrder] = useState("Empty")

  function handleKeep() {
      document.getElementById("stage-item").innerText = `Stage: ${currentOrder} (Kept)`
      console.log(currentOrder)
  }

  function handleLock() {
      setLock(true)
      setCurrentStorage([...currentStorage, currentOrder])
      document.getElementById("stage-item").innerText = `Stage: Empty`
  }

  return (
    <>
      <h1>{lock ? "Door Locked" : "Door Unlocked"}</h1>
      <p id='stage-item'>Stage: Empty</p>
      <div className="card">
        {!lock && <button onClick={handleLock}>Lock Door</button>}
        {!lock && <button onClick={handleKeep}>Keep Order</button>}
      </div>
      <Keypad currentStatus={lock} setCurrentStatus={setLock} currentOrder={currentOrder} setCurrentOrder={setCurrentOrder}/>
      <Storage currentStorage={currentStorage} setCurrentStorage={setCurrentStorage}/>

    </>
  )
}

export default App
