import React from 'react';
import ReactDOM from 'react-dom/client';


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {className: 'heading'}, "This is Namaste React"),
    React.createElement("h2", {}, "By - S K Reddy Sasi"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", {className: 'notes'}, "please check the notes for this Episode in 'Notes.text' file"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
