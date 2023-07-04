import React, {Fragment} from 'react';
import Component from './Component';
import Props from './Props';
import  State  from './State'
import  LifeCycle  from './LifeCycle'
import  Events  from './Events'
import  Fragments  from './Fragments'
import  Key  from './Key'
import  Refs  from './Refs'
import  ReactMemo  from './ReactMemo'
import  UseContext  from './UseContext'
import  UseMemo  from './UseMemo'
import  Router  from './Router'
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import PureComponent from './PureComponent';
import {NavLink ,Routes, Route, Outlet } from 'react-router-dom';
import './myProject.css';

const Navigation=()=>{
    return (
       <Fragment >
          <ul className="Navigation-list">
             <li> <NavLink to="/Component" activeClassName="active">Component</NavLink></li>    
             <li><NavLink to="/Props" activeClassName="active">Props</NavLink></li>          
             <li><NavLink to="/State" activeClassName="active">State</NavLink></li>          
             <li><NavLink to="/LifeCycle" activeClassName="active">LifeCycle</NavLink></li>       
             <li><NavLink to="/Events" activeClassName="active">Events</NavLink></li>          
             <li><NavLink to="/Fragments" activeClassName="active">Fragment</NavLink></li>        
             <li><NavLink to="/Key" activeClassName="active">Key</NavLink></li>             
             <li><NavLink to="/Refs" activeClassName="active">Refs</NavLink></li>             
             <li><NavLink to="/ReactMemo" activeClassName="active">ReactMemo</NavLink></li>        
             <li><NavLink to="/UseContext" activeClassName="active">UseContext</NavLink></li>       
             <li><NavLink to="/UseMemo" activeClassName="active">UseMemo</NavLink></li>          
             <li><NavLink to="/Router" activeClassName="active">Router</NavLink></li>           
         </ul>
           <Routes>
             <Route path="/Component" element={<Component />}>
             <Route path="/Component/FunctionComponent" element={<FunctionComponent />} />
             <Route path="/Component/ClassComponent" element={<ClassComponent />} />
             <Route path="/Component/PureComponent" element={<PureComponent />} />
            </Route> 
             <Route path="/Props" element={<Props />} /> 
             <Route path="/State" element={<State />} /> 
             <Route path="/LifeCycle" element={<LifeCycle />} /> 
             <Route path="/Events" element={<Events />} /> 
             <Route path="/Fragments" element={<Fragments />} /> 
             <Route path="/Key" element={<Key />} /> 
             <Route path="/Refs" element={<Refs />} /> 
             <Route path="/ReactMemo" element={<ReactMemo />} /> 
             <Route path="/UseContext" element={<UseContext />} /> 
             <Route path="/UseMemo" element={<UseMemo />} /> 
             <Route path="/Router" element={<Router />} /> 
           </Routes>
        <Outlet />

        </Fragment>

    )
}


export default Navigation


