import "./App.css";

function App() {
  return (
    <>
      <Ex8_xp />
    </>
  );
}

function Ex1_xp() {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
}

function Ex2_xp() {
  const myelement = <h1>I Love JSX!</h1>;
  return (
    <>
      {myelement}
      {/* this is an jsx exmeple - just make it easier to write things in react */}
    </>
  );
}

function Ex3_xp() {
  return (
    <>
      <h1>I do not use JSX!</h1>
    </>
  );
}

function Ex4_xp() {
  const sum = 5 + 5;
  const phrase = <h1>react is {sum} times better with jsx</h1>;
  return <>{phrase}</>;
}

function Ex5_xp() {
  const fruits = (
    <div>
      {" "}
      <li>banana</li> <li>apple</li> <li>kiwi</li>{" "}
    </div>
  );
  const list = <ul> {fruits} </ul>;

  return <>{list}</>;
}

function Ex6_xp() {
  const header1 = (
    <header>
      {" "}
      <h1>I am a header</h1>{" "}
    </header>
  );
  const header2 = (
    <header>
      <h1> I am a header too </h1>{" "}
    </header>
  );

  return (
    <>
      {header1}
      {header2}
    </>
  );
}

function Ex7_xp() {
  const input = <input type="text" />;

  return <>{input}</>;
}

function Ex8_xp() {
  const name = "John";
  const age = 12;
  const phrase = (
    <h1>
      {" "}
      {name} is {age} years old{" "}
    </h1>
  );

  return <>{phrase}</>;
}

export default App;
