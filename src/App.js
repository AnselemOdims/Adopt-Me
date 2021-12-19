import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet.js';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Hector",
      animal: "Dog",
      breed: "Dobberman",
    }),
    React.createElement(Pet, {
      name: "Hercules",
      animal: "Dog",
      breed: "German Shepherd",
    }),
    React.createElement(Pet, {
      name: "Fluffy",
      animal: "Cat",
      breed: "Egyptian Cat",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
