import React from 'react';
import Mather from './mather';


class Grandmother extends React.Component {
  render(){
    return (
    <div >
      
        
        <p>
          Я освою библиотеку {this.props.name}
        </p>
         
        <Mather />

    </div>
  );
  }
  
}


export default Grandmother;
