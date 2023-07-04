// import React from "react";

// class Cycle extends React.Component{
//     state={
//         count:0
//     }
   
//     render(){

//         return (
//             <div>
//                 {this.state.count %2 === 0 && <Cycle2/>}
//               {this.state.count}
//               <button onClick={()=>this.setState(state=>({count:state.count+1}))}>up</button>
              
//             </div>
//         )
//     }

// }
// class Cycle2 extends React.Component{
//     state={
//         count:0
//     }
   
//     render(){
//         console.log('render')
//         return (
//             <div>
//               {this.state.count}
//               <button onClick={()=>this.setState(state=>({count:state.count+1}))}>up2</button>
              
//             </div>
//         )
//     }
//     componentDidMount(){console.log('componentDidMount');}
//     componentDidUpdate(){console.log('componentDidUpdate');}
//     componentWillUnmount(){console.log('componentWillUnmount')}
// }

// export default Cycle


//________________________________________________________________________________________________________


// import React,{useState,UseEffect, useEffect} from "react";

// const Cycle=({a,b})=>{
//     const[count, setCount]=useState(0)
   
//     useEffect(()=>{console.log('componentDidMount');},[])
//     useEffect(()=>{console.log('componentDidUpdate');},[count])
//     useEffect(()=>{console.log('componentDidMount')
//      console.log('componentDidUpdate')})
//      useEffect(()=>{
//         return ()=> console.log('componentWillUnmount')})
    
    
    
//     return (<div>
//         {count}
//         <button onClick={()=>setCount(count+1)}>gjc</button>
//     </div>)
// }

// export default Cycle