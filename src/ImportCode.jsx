

export const classComponentCode1 = `
import Mother from './Mother';
const link = (
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
);
class Grandmother extends React.Component {
  render() {
    return (
      <div>
        {link}
        <p>
          Я освою библиотеку {this.props.name}
        </p>
        <Mother />
      </div>
    );
  }
}
export default Grandmother;
  `;

export const FunctionComponentСode1 = `const link = (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  );

   const Grandmother=()=>
   return (
    <div>
      {link}    
      <p>
        Я освою библиотеку React
      </p>
      <Mother />
    </div>
  );

   export default Grandmother`

export const propsCode1 = `const Func=(props)=>{
    return (<div>
     {props.name}
     {props.age}
     </div> )
    }
    export default Func
    `
export const propsCode2 = `const Func=(props)=>{
        const {name,age}=props
        return (<div>
         {name}
         {age}
         </div> )
        }
        export default Func
        `
export const propsCode3 = `const Func=({name,age})=>{<div>{name}{age}
    </div> 
    }
    export default Func
    `
export const propsCode4 = `
    class Welcome extends React.Component {
        render() {
            return <h1>Привет, {this.props.name}</h1>;
        }
    }
export default Welcome
`
export const propsCode5 = `function Welcome (props) {
return <h1> Привет, {props.name}</h1>;
}
const element = <Welcome name="Алиса" />;
ReactDOM.render(element, document.getElementById('root')); 
`
export const propsCode6 = `<Welcome name="Алиса"> `

export const stateCode1 = `class St extends React.Component {
  state ={ 
    count: 0
  }
  clicer = () => {
    this.setState(state=>({count:state.count++}));
  };
  render(){
    return(
      <div>
        {this.state.count}
        <button onClick={() => this.clicer()}>tap</button>
      </div>
    )
  }
}
export default St;`

export const stateCode2 = `<button onClick={()=>this.setState({count: this.state.count+1})}> Click `
export const stateCode3 = `<button onClick={()=>this.setState((state)=>({count+1}))}>Click</button>`
export const stateCode4 = `import {useState} from 'react';`
export const stateCode5 = `const [name, setName] = useState('Mark');`
export const stateCode6 = `import React, {useState} from "react";

const St=({name,age})=>{
  const [count, setState]=useState(0)
  return <div>
    {count}
    <button onClick={()=>setState(count+1)}>tap</button>
  </div>
}
 export default St`
export const liveCycleCode1 = `constructor(props) {
  super(props);
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}`
export const liveCycleCode2 = `render () {
  return (
      <div>
          'Hello'
      </div>
  )
}`
export const liveCycleCode3 = ` import React from "react";

class Cycle extends React.Component{
    state={
        count:0
    }
   
    render(){

        return (
            <div>
                {this.state.count %2 === 0 && <Cycle2/>}
              {this.state.count}
              <button onClick={()=>this.setState(state=>({count:state.count+1}))}>up</button>
              
            </div>
        )
    }
}

class Cycle2 extends React.Component{
    state={
        count:0
    }
   
    render(){
        console.log('render')
        return (
            <div>
              {this.state.count}
              <button onClick={()=>this.setState(state=>({count:state.count+1}))}>up2</button>
              
            </div>
        )
    }
    componentDidMount(){console.log('componentDidMount');}
    componentDidUpdate(){console.log('componentDidUpdate');}
    componentWillUnmount(){console.log('componentWillUnmount')}
}

export default Cycle`
export const liveCycleCode4 = `import React,{useState, useEffect} from "react";

const Cycle=({a,b})=>{
    const[count, setCount]=useState(0)
   
    useEffect(()=>{console.log('componentDidMount');},[])
    useEffect(()=>{console.log('componentDidUpdate');},[count])
    useEffect(()=>{console.log('componentDidMount')
     console.log('componentDidUpdate')})
     useEffect(()=>{
        return ()=> console.log('componentWillUnmount')})
    
    
    
    return (<div>
        {count}
        <button onClick={()=>setCount(count+1)}>gjc</button>
    </div>)
}

export default Cycle`
export const eventsCode1 = `<button onClick={()=>console.log('hello') }>Click</button>

<input onChange={(event)=>console.log(event.target.value)}/>`

export const fragmentsCode1 = `import { Fragment } from 'react';`
export const fragmentsCode2 = `class ChildComponent extends React.Component {
  render() {
      return (
          <Fragment>
              <h1>Hello Child Component</h1>
          </Fragment>
      )
  }
}`
export const fragmentsCode3 = `class ChildComponent extends React.Component {
  render() {
      return (
          <>
              <h1>Hello Child Component</h1>
          </>
      )
  }
}`
export const fragmentsCode4 = `import React, {Fragment} from "react"

const Fragments=()=>{
return <Fragment>
<p>Завтра</p>
<p>рано вставать</p>
</Fragment>}

export default Fragments`

export const RefCode1 = `class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}`

export const RefCode2 = `import React,{useRef,useEffect} from "react";

const Ref=()=>{
const textInput=useRef(null)

useEffect(()=>{
  textInput.current.focus()},[])

return <>
<input ref={textInput} />
</>
}

export default Ref;`

export const keyCode1 = `import React, {Fragment} from "react";
import Fragments2 from "./FregmentKey copy";


const Fragments=({a,v})=>{
const arr=[1,2,3,1];
return <Fragment>
{
arr.map((item,index)=> <Fragments2 key={index} text={item}/>)
}
</Fragment>
}

export default Fragments


const Fragments2=({text})=>{
  return <>
  <p>{text}</p>
  </>
  }


export default Fragments2`
export const reactMemoCode1 = `
import React,{useState} from "react";


const MemoPure=()=>{
    const [texst,setText]=useState(0)
    return <>
        {count}
//     <button onClick={()=>setState(count+1)}>tap</button>
    </>
}

export default React.memo(MemoPure)`


export const reactMemoCode2 = `
import React from "react";

class MemoPure extends React.PureComponent{
    state={
        count:0
    }

    render(){
            return (
              <div>
              {this.state.count}
              <button onClick={()=>this.setState(state=>({count:state.count+1}))}> пуск</button>
              </div>
            )
          }
}
export default MemoPure`

export const UseMemoCode1 = `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`

export const UseContextCode1 = `
import React from "react";
const MyContext = React.createContext();

export default MyContext`

export const UseContextCode2 = `import React from "react";
import MyContext from "./Conxext"

const Mother=()=>{

  return (
  <>
    <MyContext.Provider value={{name:'Pavel'}}> 
    <Son name={'Misha'} age={29}/>
 </MyContext.Provider>
  </>
  )
}

export default Mother`

export const UseContextCode3 = `import React from "react";
import MyContext from "./Conxext"

const Son=(name)=>{

  return (
  <>
                <MyContext.Consumer>
            {value => <p>{value.name}</p> }
          </MyContext.Consumer>

  </>
  )
}
export default Son`

export const UseContextCode4 = `import React, { createContext, useContext } from "react";

const MyContext = createContext(); // Создаем контекст

const ChildComponent = () => {    // Компонент, который будет использовать контекст
  const contextValue = useContext(MyContext); // Используем useContext для получения значения контекста
  return <p>Значение контекста: {contextValue}</p>;
};

const ParentComponent = () => {     // Родительский компонент, который предоставляет значение контекста
  const contextValue = "Hello, World!";
  return (
    <MyContext.Provider value={contextValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

const App = () => {  // Корневой компонент, в котором рендерится родительский компонент
  return <ParentComponent />;
};

export default App;`

export const routeCode1 = `npm install react-router-dom@next`
export const routeCode2 = `import { BrowserRouter } from 'react-router-dom';`
export const routeCode3 = `import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);`
export const routeCode4 = `
import React from 'react';
import Component from './Component';
import Props from './Props';
import  State  from './State'
import  LifeCycle  from './LifeCycle'
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import {NavLink ,Routes, Route, Outlet } from 'react-router-dom';

const Navigation=()=>{
    return (
       <>
          <ul>
             <li> <NavLink to="/Component" activeClassName="active">Component</NavLink></li>
             <li><NavLink to="/Props" activeClassName="active">Props</NavLink></li>
             <li><NavLink to="/State" activeClassName="active">State</NavLink></li>
             <li><NavLink to="/LifeCycle" activeClassName="active">LifeCycle</NavLink></li>
         </ul>
           <Routes>
             <Route path="/Component" element={<Component />}>
             <Route path="/Component/FunctionComponent" element={<FunctionComponent />} />
             <Route path="/Component/ClassComponent" element={<ClassComponent />} />
            </Route> 
             <Route path="/Props" element={<Props />} /> 
             <Route path="/State" element={<State />} />
             <Route path="/LifeCycle" element={<LifeCycle />} />
           </Routes>
        <Outlet />
        </>
    )
}

export default Navigation`
export const routeCode5 = `import { useNavigate } from 'react-router-dom';

// ...

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Домашняя страница</h1>
      <button onClick={handleClick}>Перейти к странице О нас</button>
    </div>
  );
};`