import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return (
    <div id="container">
      <h1>Talk is cheap - Show me the Code</h1>
      <h2>Just trying to work on same branch and pushing my changes to Git</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
