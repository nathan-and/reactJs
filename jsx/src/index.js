//1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
//2) Get a reference to the div with ID root
const el = document.getElementById("root");
//3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);
//4) Create a component
function App() {
  let message = "Bye there!";
  if (Math.random() > 0.5) {
    message = "Hello there!";
  }
  const name = "Ebe";
  const age = "25";
  <h4>This is an element!</h4>; //won't show because it's not being returned
  return (
    <h1>
      {message} my name is {name} {age}
    </h1>
  );
}
//5) Show the component on the screen
root.render(<App />);
