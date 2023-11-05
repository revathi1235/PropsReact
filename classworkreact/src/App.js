// // import Uncontrolled from "./component/Uncontrolled";
// // import Memo from "./component/Memo";
// import React from "react"

// // import 'bootstrap/dist/css/bootstrap.min.css'

// import Props from "./component/Props";
// // import Todo from "./Todo/Todo";
// function App() {
//   const state=[
//     {name:"kerala",id:"adhar", no:"1234567890"},
//     {name:"tamilnadu",id:"adhar", no:"1234567890"},
//     {name:"thailand",id:"adhar", no:"1234567890"}
    
//   ]
//   return (
//     <div className="App">
//    {/* <Memo/> */}
//     {/* <Uncontrolled/> */}
//     {/* <Todo/> */}
//     <Props states={state} />
  
    
//     </div>
//   )
// }
// export default App;

import React from 'react'
import Props from './component/Props'
function App() {
  const state=[
    {name:"rahul" ,location:"palakkad", age:"30"},
    {name:"dacind" ,location:"thrissur", age:"40"},
    {name:"dacel" ,location:"pala", age:"39"},

  ]
  return (
    <div>
      <Props states={state}/>
    </div>
  )
}

export default App


