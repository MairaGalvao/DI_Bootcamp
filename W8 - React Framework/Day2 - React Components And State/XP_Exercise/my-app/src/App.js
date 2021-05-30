// import logo from "./logo.svg";
import "./App.css";

// Exercise 1: Function & JSX

// Exercise 2: Creating A Functional Component
function App() {
    return (
    <>
      <PrintHello />
    </>
  );
}

function PrintHello() {
  const react = 'react'
  const header1 = (
    <header>
      
      <h1>I love {react}</h1>
    </header>
  );
  const header2 = (
    <header>
      <h1> I am a {react} component </h1>
    </header>
  );

  return (
    <>
      {header1}
      {header2}
    </>
  );
  
}

// missing from exercise 3





export default App;