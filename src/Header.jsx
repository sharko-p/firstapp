import React from 'react';
import logo from './logo.svg';
import './index.css';
import './App.css';






const Header=()=>{
    const styles = {
        // backgroundColor: "red",
        // color: "white",
display:'flex',
'justify-content':'flex-end',
        
    }
    const stylesImg={
        height: '50px'
    }
    return(
        <div className="header">
       <header >
       <div style={styles}> <img style={stylesImg} src={logo} className="App-logo"  alt="logo" /></div>
        
           
        </header>
        </div>
    )
}

export default Header



// import React from "react";

// const MyComponent = () => {
//   const styles = {
//     backgroundColor: "red",
//     color: "white"
//   };

//   return <div style={styles}>Hello, world!</div>;
// };

// export default MyComponent;