import react, {useState} from 'react'
function ColorPicker(){
    const [color, setColor] = useState('#ffffff');

    function handleColorChange(event){
        setColor(event.target.value);
    }
    return(<>
        <div className='Color-picker-container'>
            <h1>Color Picker</h1>
            <div className='Color-display' style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
        </>);
}

export default ColorPicker