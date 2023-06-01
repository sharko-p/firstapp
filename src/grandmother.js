import React from 'react';
import Mother from './Mother';



class Grandmother extends React.Component {
  render(){
    return (
    <div >
      
        
        <p>
          Я освою библиотеку {this.props.name}
        </p>
         
        <Mother />

    </div>
  );
  }
  
}


export default Grandmother;
