import React from "react";
import { classComponentCode1 } from "../../ImportCode";
import "../../myProject.css";

const ClassComponent = () => {
  return (
    <>
      <h2> Class Component</h2>
      <p>Ещё компоненты можно определять как классы ES6:</p>
      <pre>
        <code className="codeStyle">{classComponentCode1}</code>
      </pre>
    </>
  );
};

export default ClassComponent;
