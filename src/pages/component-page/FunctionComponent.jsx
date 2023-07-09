import React from "react";
import { FunctionComponentСode1 } from "../../ImportCode";
import "../../myProject.css";

const FunctionComponent = () => {
  return (
    <>
      <h2> Function Component</h2>
      <p>
        Эта функция — компонент, потому что она получает данные в одном объекте
        («пропсы») в качестве параметра и возвращает React-элемент. Мы будем
        называть такие компоненты «функциональными», так как они буквально
        являются функциями.
      </p>
      <pre>
        <code className="codeStyle">{FunctionComponentСode1}</code>
      </pre>
    </>
  );
};
export default FunctionComponent;
