import { paths } from "../components/paths-component/paths";
import Component from "../pages/component-page/Component";
import Props from "../pages/props-page/Props";
import State from "../pages/state-page/State";
import LifeCycle from "../pages/lifeCycle-page/LifeCycle";
import Events from "../pages/events-page/Events";
import Fragments from "../pages/fragment-page/Fragments";
import Key from "../pages/key-page/Key";
import Refs from "../pages/refs-page/Refs";
import ReactMemo from "../pages/reactMemo-page/ReactMemo";
import UseContext from "../pages/useContext-page/UseContext";
import UseMemo from "../pages/useMemo-page/UseMemo";
import Router from "../pages/router-page/Router";
import FunctionComponent from "../pages/component-page/FunctionComponent";
import ClassComponent from "../pages/component-page/ClassComponent";
import PureComponent from "../pages/component-page/PureComponent";

export const publicRoutes = [
  { path: paths.Component, element: <Component /> },
  { path: paths.FunctionComponent, element: <FunctionComponent /> },
  { path: paths.ClassComponent, element: <ClassComponent /> },
  { path: paths.PureComponent, element: <PureComponent /> },
  { path: paths.Props, element: <Props /> },
  { path: paths.State, element: <State /> },
  { path: paths.LifeCycle, element: <LifeCycle /> },
  { path: paths.Events, element: <Events /> },
  { path: paths.Fragments, element: <Fragments /> },
  { path: paths.Key, element: <Key /> },
  { path: paths.Refs, element: <Refs /> },
  { path: paths.ReactMemo, element: <ReactMemo /> },
  { path: paths.UseContext, element: <UseContext /> },
  { path: paths.UseMemo, element: <UseMemo /> },
  { path: paths.Router, element: <Router /> },
];

export const navlinkForMap = [
  { path: paths.Component, element: <Component /> },
  { path: paths.Props, element: <Props /> },
  { path: paths.State, element: <State /> },
  { path: paths.LifeCycle, element: <LifeCycle /> },
  { path: paths.Events, element: <Events /> },
  { path: paths.Fragments, element: <Fragments /> },
  { path: paths.Key, element: <Key /> },
  { path: paths.Refs, element: <Refs /> },
  { path: paths.ReactMemo, element: <ReactMemo /> },
  { path: paths.UseContext, element: <UseContext /> },
  { path: paths.UseMemo, element: <UseMemo /> },
  { path: paths.Router, element: <Router /> },
];
