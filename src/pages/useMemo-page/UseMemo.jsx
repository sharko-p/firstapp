import React from "react";
import { UseMemoCode1 } from "../../ImportCode";
import "../../myProject.css";

const UseMemo = () => {
  return (
    <>
      <h2> UseMemo</h2>
      <p>
        UseMemo. React.memo не ререндерит компоненту, а хук useMemo не
        ререндерит функцию если не изменяются параметры. Если функция долго
        исполняется и нам не обязательно её каждый раз запускать мы можем
        использовать useMemo.
      </p>
      <pre>
        <code className="codeStyle">{UseMemoCode1}</code>
      </pre>
      <p>
        Функция, переданная useMemo, запускается во время рендеринга. Не делайте
        там ничего, что вы обычно не делаете во время рендеринга. Например,
        побочные эффекты принадлежат useEffect, а не useMemo. Если массив не был
        передан, новое значение будет вычисляться при каждом рендере.
      </p>
    </>
  );
};
export default UseMemo;
