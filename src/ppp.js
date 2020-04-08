
import React, { useState } from 'react';
import InputNumber from './inputNumber'
function App(){
    const [value,setValue] = useState('aaa')
    
    return (
        <div>
        {value}<br/>
        <InputNumber value={value} onChange={e=>{console.log(1)}}/>
        <br/>
        <InputNumber defaultValue={value} onChange={e=>{console.log(2)}}/>
        </div>
    )
}
export default App;