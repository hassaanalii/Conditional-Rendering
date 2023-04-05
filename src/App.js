import React, { useState } from 'react'

export default function App() {
    var [text, showTxt] = useState(false);
    const changed = () =>{
        showTxt(text = !text)
    }
    return (
    <div>
        <button onClick={changed}>
            Toggle
        </button>

        {text && <p>hello</p>}
    </div>
  )
}
