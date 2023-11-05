// import React from 'react'
// </form>;
// function Uncontrolled() {
//     const inputRef=useRef();
//     const handleSubmit =(event)=>{
//         event.preventDefault();
//         console.log("Form submitted with value" ,inputRef.current.value)
//     };
//   return (
   
//         <form onSubmit={handleSubmit}>
//         <label>
//    <input type="text" ref={inputRef} />
//    </label>
//    <button type="submit">SUBMIT </button>
//         </form>
  
//   )
// }

// export default Uncontrolled
import React from 'react';
import  { useRef } from 'react'

function Uncontrolled() {
  const inputRef=useRef();
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("form is valid value",inputRef.current.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" name="" id="" ref={inputRef} />
      <button>submit</button>
      </form>
    </div>
  )
}

export default Uncontrolled