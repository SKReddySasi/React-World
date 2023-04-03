import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <div>
    <h1 className="heading" tabIndex="5">
      Namaste React Using JSX
    </h1>
  </div>
);
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1>This Is Functional Component</h1>
      <h2>In this Episode We have Learned</h2>
      <ul>
        <li><b>JSX</b> - HTML-like or XML-like syntax </li>
        <li><b>Component Composition</b> - A "Component" inside another "Component"  is known as Component Composition.</li>
        <li><b>React Fragment</b> - Behaves like a Empty Tag</li>
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
