import React from 'react'

export default function test(props) {
  


  return (
    <div>
      test <br />
      {props.num} <br />
      {props.name} <br />
      {props.age} <br />
      
       <button onclick = {props.handleadd}> Click</button>
      </div>
  )
}
