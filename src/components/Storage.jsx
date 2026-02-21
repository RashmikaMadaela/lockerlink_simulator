function Storage({currentStorage, setCurrentStorage}) {
    function handleClear() {
        setCurrentStorage([])
    }
    return (
        <div>
            <h1>Storage</h1>
            <ul>
                {currentStorage.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={handleClear}>Clear Storage</button>
        </div>
    )
}

export default Storage