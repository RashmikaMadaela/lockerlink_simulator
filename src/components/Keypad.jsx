import orders from "../data/data"

function Keypad({currentStatus, setCurrentStatus}) {
    function handleClick(e) {
        document.getElementById("keypad-display").innerText += e.target.value
    }

    function handleSubmit() {
        console.log("Entered PIN:", document.getElementById("keypad-display").innerText)
        const enteredPin = document.getElementById("keypad-display").innerText
        const order = orders.find(order => order.pin === enteredPin)
        if (order) {
            if (currentStatus) {
                setCurrentStatus(false)
                document.getElementById("keypad-message").innerText = `Order Found: ${order.description}. Door Unlocked.`
            } else {
                document.getElementById("keypad-message").innerText = `Order Found: ${order.description}. Door is already unlocked.`
            }
        } else{
            document.getElementById("keypad-message").innerText = "Invalid PIN. Please try again."
        }
        document.getElementById("keypad-display").innerText = ""
    }

  return (
    <>
        <div className="keypad" id="keypad">
            <p className="keypad-display" id="keypad-display"></p>
            <p id="keypad-message"></p>
            <div className="keyrow">
                <button id="1" value="1" onClick={handleClick}>1</button>
                <button id="2" value="2" onClick={handleClick}>2</button>
                <button id="3" value="3" onClick={handleClick}>3</button>
            </div>
            <div className="keyrow">
                <button id="4" value="4" onClick={handleClick}>4</button>
                <button id="5" value="5" onClick={handleClick}>5</button>
                <button id="6" value="6" onClick={handleClick}>6</button>
            </div>
            <div className="keyrow">
                <button id="7" value="7" onClick={handleClick}>7</button>
                <button id="8" value="8" onClick={handleClick}>8</button>
                <button id="9" value="9" onClick={handleClick}>9</button>
            </div>
        </div>
        <button className="keypad-enter" onClick={handleSubmit}>Enter</button>
    </>
    )
}

export default Keypad
