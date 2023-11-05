import React from 'react'
import { useRef } from 'react'
function Controlled() {
    const inputRef=useRef();
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("form is submitted with value",inputRef.current.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button>submit</button>
        </form>
    </div>
  )
}

export default Controlled
