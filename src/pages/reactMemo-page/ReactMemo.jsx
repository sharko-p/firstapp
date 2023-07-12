import React from "react";
import { reactMemoCode1, reactMemoCode2 } from "../../ImportCode";
import "../../myProject.css";

const ReactMemo = () => {
  return (
    <>
      <h2> ReactMemo</h2>
      <p>
        React.memo — это компонент высшего порядка. Аналог Pure Component в
        классовых компонентах. Компонент высшего порядка — это функция, которая
        принимает компонент и возвращает новый компонент. Если ваш компонент
        всегда рендерит одно и то же при неменяющихся пропсах, вы можете
        обернуть его в вызов React.memo для повышения производительности в
        некоторых случаях, мемоизируя тем самым результат. Это значит, что React
        будет использовать результат последнего рендера, избегая повторного
        рендеринга.
      </p>
      <pre>
        <code className="codeStyle">{reactMemoCode1}</code>
      </pre>
      <p>
        React.memo затрагивает только изменения пропсов. Если функциональный
        компонент обёрнут в React.memo и использует useState, useReducer или
        useContext, он будет повторно рендериться при изменении состояния или
        контекста.
      </p>
      <p>
        {" "}
        В классовых компонентах выступает метод shouldComponentUpdate().
        Используется для увеличения производительности, но может привести к
        багам.
      </p>
      <pre>
        <code className="codeStyle">{reactMemoCode2}</code>
      </pre>
    </>
  );
};
export default ReactMemo;
