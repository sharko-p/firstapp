import Son from "./son";
import Daughter from "./daughter";

const funcSon=()=><p>и найду работу</p>

function Mather (){
  return <div>
    <p>
      до осени
    </p>
   <Son time={funcSon}/>
   <Daughter sity={{name: 'Minsk'}} year={2023}/>
  </div>
}


export default Mather;
