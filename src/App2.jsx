import React, {useState} from 'react'

export default function App2(props) {
    const [show,setshow] = useState(true)
  return (
    <div>
        {show &&
         <h1>{props.number}</h1>
        }
        <button onClick={() => setshow(true)}> Click</button>
        <button onClick={() => setshow(false)}> Click</button>
    </div>
  )
}
