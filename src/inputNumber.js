import React, { useState } from 'react';
function    MyImput(){
    const [value,setValue] = useState('bbb')
    
    return (
        <div>

        <input type="text" value={value} onChange={(e) => { 
            setValue(e.target.value)
        }}/>
        </div>
    );
}
    

export default MyImput;