import React from "react";
import './myProject.css';
import {NavLink , Outlet } from 'react-router-dom';
const Component = () => {
    return (
        <>
            <h2> Component</h2>
            <p> Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности. Их можно складывать вместе и использовать несколько раз.
            Во многом компоненты ведут себя как обычные функции JavaScript. Они принимают произвольные входные данные (так называемые «пропсы») и возвращают React-элементы, описывающие, что мы хотим увидеть на экране.
            </p>
            <p> Oни бывают функциональные и классовые:</p>

            <ul className="Navigation-list">
             <li> <NavLink to="/Component/FunctionComponent" activeClassName="active">Function Component</NavLink></li>    
             <li><NavLink to="/Component/ClassComponent" activeClassName="active">Class Component</NavLink></li> 
             <li><NavLink to="/Component/PureComponent" activeClassName="active">Pure Component</NavLink></li>                    
         </ul>
         <Outlet />

        </>
    )
}
export default Component