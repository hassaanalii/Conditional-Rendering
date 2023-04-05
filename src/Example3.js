import React, { useState } from 'react'

export default function Example3() {
    const [mgs, setMsgs] = useState([])
    const [newmgs, setnewMsgs] = useState(["hdsd"]);

    const add = () =>{
        setMsgs(mgs => newmgs)
        
    }
  return (
    <div>
        <button onClick={add}>Add</button>
        {/* <button onClick={remove}>Remove</button> */}

        {/* {mgs.length ? <p>dasd</p> : null} */}
        {!!mgs.length && <p>asa</p>}
        
    </div>
  )
}
