import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // делает что-то полезное

  // обязана вернуть JSX
  debugger;
  return (
    <div>
      <Title />
      <Rating />
      <Accordion />
    </div>
  );
}

function Title() {
  console.log("Title rendering");
  return <>This is APP Component</>;
}

function Star() {
  console.log("Star rendering");

  return <div>*</div>;
}

// function Hello() {
//   console.log("Hello rendering");
//   alert("Hello");
// }

// Hello();

function Rating() {
  console.log("Rating rendering");
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

function Accordion() {
  console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle />
      <AccordionBody />
    </div>
  );
}

function AccordionTitle() {
  console.log("AccordionTitle rendering");

  return (
    <div>
      <h3>Menu</h3>
    </div>
  );
}

function AccordionBody() {
  console.log("AccordionBody rendering");

  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}
export default App;
