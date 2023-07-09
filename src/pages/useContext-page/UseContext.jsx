import React from "react";
import {
  UseContextCode1,
  UseContextCode2,
  UseContextCode3,
  UseContextCode4,
} from "../../ImportCode";
import "../../myProject.css";
const UseContext = () => {
  return (
    <>
      <h2> UseContext</h2>
      <p>
        Контекст разработан для передачи данных для всего дерева
        React-компонентов, не прокидывая через пропсы.
      </p>
      <p>Создавать контекст лучше в отдельном файле:</p>
      <pre>
        <code className="codeStyle">{UseContextCode1}</code>
      </pre>
      <p>
        Вызывая React.createContext мы получаем объект, который содержит два
        компонента: 1. Компонент Provider. Благодаря ему все дочерние компоненты
        могут получать значения, которые мы ему передаем.
      </p>
      <pre>
        <code className="codeStyle">{UseContextCode2}</code>
      </pre>
      <p>
        Компонент Provider принимает пропc value, который будет передан во все
        компоненты, использующие этот контекст и являющиеся потомками этого
        компонента Provider. Один Provider может быть связан с несколькими
        компонентами, потребляющими контекст. Так же компоненты Provider могут
        быть вложены друг в друга, переопределяя значение контекста глубже в
        дереве.
      </p>
      <p>
        2. Компонент Consumer - это React-компонент, который подписывается на
        изменения контекста. Consumer принимает функцию в качестве дочернего
        компонента. Эта функция принимает текущее значение контекста и
        возвращает React-компонент. Передаваемый аргумент value будет равен
        ближайшему (вверх по дереву) значению этого контекста, а именно пропcу
        value компонента Provider. Если такого компонента Provider не
        существует, аргумент value будет равен значению defaultValue, которое
        было передано в createContext().
      </p>
      <pre>
        <code className="codeStyle">{UseContextCode3}</code>
      </pre>
      <p>
        Принимает объект контекста (значение, возвращённое из
        React.createContext) и возвращает текущее значение контекста для этого
        контекста. Текущее значение контекста определяется пропом value
        ближайшего MyContext.Provider над вызывающим компонентом в дереве.
      </p>
      <pre>
        <code className="codeStyle">{UseContextCode4}</code>
      </pre>
      <p>
        Когда ближайший MyContext.Provider над компонентом обновляется, этот хук
        вызовет повторный рендер с последним значением контекста, переданным
        этому провайдеру MyContext. Даже если родительский компонент использует
        React.memo или реализует shouldComponentUpdate, то повторный рендер
        будет выполняться, начиная c компонента, использующего
        useContext.Аргументом для useContext должен быть непосредственно сам
        объект контекста: Правильно: useContext(MyContext)
      </p>
    </>
  );
};
export default UseContext;
