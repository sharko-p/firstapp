// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../../styles/myProject.css";

// const Navibar = () => {
//   return (
//     <>
//       <ul className="Navigation-list">
//         <li>
//           <NavLink to="/Component">Component</NavLink>
//         </li>
//         <li>
//           <NavLink to="/Props">Props</NavLink>
//         </li>
//         <li>
//           <NavLink to="/State">State</NavLink>
//         </li>
//         <li>
//           <NavLink to="/LifeCycle">LifeCycle</NavLink>
//         </li>
//         <li>
//           <NavLink to="/Events">Events</NavLink>
//         </li>
//         <li>
//           <NavLink to="/Fragments">Fragment</NavLink>
//         </li>
//         <li>
//           <NavLink to="/Key">Key</NavLink>
//         </li>
//         <li>
//           <NavLink to="/Refs">Refs</NavLink>
//         </li>
//         <li>
//           <NavLink to="/ReactMemo">ReactMemo</NavLink>
//         </li>
//         <li>
//           <NavLink to="/UseContext">UseContext</NavLink>
//         </li>
//         <li>
//           <NavLink to="/UseMemo">UseMemo</NavLink>
//         </li>
//         <li>
//           <NavLink to="/Router">Router</NavLink>
//         </li>
//       </ul>
//     </>
//   );
// };

// export default Navibar;








import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/myProject.css";
import { publicRoutes } from "../../routes/routes";


const Navibar = () => {

    return (
        <>
          <ul className="Navigation-list">
            {publicRoutes.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path}>{link.path.split('').map(item=>item==='/'?'':item)}</NavLink>
              </li>
            ))}
          </ul>
        </>
      );
    };

    export default Navibar;



// <>
// //       <ul className="Navigation-list">
// //         {links.map((link, index) => (
//           <li key={index}>
//             <NavLink to={link.path}>{link.text}</NavLink>
//           </li>
//         ))}
//       </ul>
//     </>



// const publicRoutes = [
//   { path: paths.Component, element: <Component /> },
//   { path: paths.FunctionComponent, element: <FunctionComponent /> },
//   { path: paths.ClassComponent, element: <ClassComponent /> },
//   { path: paths.PureComponent, element: <PureComponent /> },
//   { path: paths.Props, element: <Props /> },
//   { path: paths.State, element: <State /> },
//   { path: paths.LifeCycle, element: <LifeCycle /> },
//   { path: paths.Events, element: <Events /> },
//   { path: paths.Fragments, element: <Fragments /> },
//   { path: paths.Key, element: <Key /> },
//   { path: paths.Refs, element: <Refs /> },
//   { path: paths.ReactMemo, element: <ReactMemo /> },
//   { path: paths.UseContext, element: <UseContext /> },
//   { path: paths.UseMemo, element: <UseMemo /> },
//   { path: paths.Router, element: <Router /> },
// ];




// const Navibar = () => {
//   const links = [
//     { text: 'Component', path: '/Component' },
//     { text: 'Props', path: '/Props' },
//     { text: 'State', path: '/State' },
//     { text: 'LifeCycle', path: '/LifeCycle' },
//     { text: 'Events', path: '/Events' },
//     { text: 'Fragment', path: '/Fragments' },
//     { text: 'Key', path: '/Key' },
//     { text: 'Refs', path: '/Refs' },
//     { text: 'ReactMemo', path: '/ReactMemo' },
//     { text: 'UseContext', path: '/UseContext' },
//     { text: 'UseMemo', path: '/UseMemo' },
//     { text: 'Router', path: '/Router' },
//   ];

//   return (
//     <>
//       <ul className="Navigation-list">
//         {links.map((link, index) => (
//           <li key={index}>
//             <NavLink to={link.path}>{link.text}</NavLink>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Navibar;