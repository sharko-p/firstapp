// import React from "react";

// class MemoPure extends React.PureComponent{
//     state={
//         count:0
//     }

//     render(){
//             return (
//               <div>
//               {this.state.count}
//               <button onClick={()=>this.setState(state=>({count:state.count+1}))}> Ебаш</button>
//               </div>
//             )
//           }
// }
// export default MemoPure
// без PureComponent (возвращает false), через метод shouldComponentUpdate (возвращает true)


// class MemoPure extends React.Component{
//     state={
//         count:0
//     }
//     shouldComponentUpdate(nextProps, nextState){
// if (nextProps.age===this.props.age){
// return false
// }
// else {
//     return true
// }
// }
// }
// export default MemoPure

// в функциональных через React.memo

// import React,{useState, useMemo} from "react";
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// const MemoPure=()=>{
//     const [texst,setText]=useState(0)
//     return <>
//         {count}
// //     <button onClick={()=>setState(count+1)}>tap</button>
//     </>
// }

// export default React.memo(MemoPure)