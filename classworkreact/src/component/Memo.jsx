// import React, { useState ,useMemo } from 'react'

// function Memo() {
// const [num,setNum]=useState(0);
// const [dark,setDark]=useState(false)
// const style={
//     backgroundColor:dark?"black":"white",
//     color:dark?'white':'black'
// }
// const cNum=useMemo(()=>{
//     return calculation(num);
// },[num])
// // const handleNum=(e)=>{
// //     setNum(e.target.value);
// // }

//   return (
//     <div style={style}>
//        <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/> 
//        <h2>{cNum}</h2>
//        <button onClick={()=>setDark(!dark)}>toggle</button>
//     </div>
//   )
// }

// export default Memo;

//  function calculation(num){
// console.log("loop");
// for(let i=0;i<10000000;i++){}
// return num;
//  }