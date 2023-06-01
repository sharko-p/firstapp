import React from "react"
import Son from "./Son";
import Daughter from "./Daughter";



const funcSon=()=><p>и найду работу</p>


function Mother (){
  return (
  <div>
    <p>
      до осени
    </p>
   <Son time={funcSon}/>
   <Daughter city={{name: 'Minsk'}} year={2023}/>
  </div>
  )
}

export default Mother;

