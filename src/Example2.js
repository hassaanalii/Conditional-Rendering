import React, { useState } from 'react'

export default function Example2() {
    const User = {name: String};

    const [user,setUser] = useState<User>({name: null});

    const load = () =>{
        setUser({name:"hassaan"})
    }
    // const clear = () =>{
    //     setUser(User.name = false);
    // }
  return (
    <div>
        <button onClick={load}>Load</button>
        {/* <button onClick={clear}>Clear</button> */}

        {User.name && <p>hello</p>}
    </div>
  )
}
