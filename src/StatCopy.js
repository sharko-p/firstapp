// import React from 'react';

// class St extends React.Component{
//   state={
//     count:0
//   }
//   render(){
//     return (
//       <div>
//       {this.state.count}
//       <input onChange={(inp)=>console.log(inp.target.value) }></input>
//       <button onClick={()=>this.setState(state=>({count:state.count+1}))}> Ебаш</button>
//       </div>
//     )
//   }
// }

// export default St;


// import React from "react";

// class St extends React.Component {
//   state ={ 
//     count: 0
//   }
//   clicer = () => {
//     this.setState(state=>({count:state.count++}));
//   };
//   render(){
//     return(
//       <div>
//         {this.state.count}
//         <button onClick={() => this.clicer()}>tap</button>
//       </div>
//     )
//   }
// }
// export default St;


// import React, {useState} from "react";

// const St=({name,age})=>{
//   const [count, setState]=useState(0)
//   return <div>
//     {count}
//     <button onClick={()=>setState(count+1)}>tap</button>
//   </div>
// }
//  export default St

//____________________________________________________