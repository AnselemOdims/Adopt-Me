import React from 'react';
import ReactDOM from 'react-dom';

const Pet = (props) => {
  const { name, breed, animal } = props;
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h3", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};

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
