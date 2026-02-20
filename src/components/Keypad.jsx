function Keypad() {

  return (
    <>
        <div className="keypad" id="keypad">
            <input type="text" className="keypad-display" disabled value="1234" />
            <div className="keyrow">
                <button id="1">1</button>
                <button id="2">2</button>
                <button id="3">3</button>
            </div>
            <div className="keyrow">
                <button id="4">4</button>
                <button id="5">5</button>
                <button id="6">6</button>
            </div>
            <div className="keyrow">
                <button id="7">7</button>
                <button id="8">8</button>
                <button id="9">9</button>
            </div>
        </div>
        <button className="keypad-enter">Enter</button>
    </>
    )
}

export default Keypad
