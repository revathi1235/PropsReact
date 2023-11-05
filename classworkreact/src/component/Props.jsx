import React from 'react'
 import './Props.css'

function Props({states}) {

  return (
    <div>
      {states.map((state) => (
        <div className='kerala'   >
          <h1>{state.name}</h1>
          <h1>{state.location}</h1>
          <h1>{state.age}</h1>
        </div>
      ))}
    </div>
  );
      }

export default Props;


