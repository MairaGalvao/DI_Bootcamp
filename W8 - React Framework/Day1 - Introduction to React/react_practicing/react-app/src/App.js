import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div> helo world </div>
      <span> mairaaaa </span>
      <Result isCapitalR={true} ourColor={"green"} showExtraDiv={true} />
      <Result isCapitalR={false} showExtraDiv={false} />
    </>
  );
}

function Result({ isCapitalR, showExtraDiv, ourColor = "blue" }) {
  // let resultText

  // if (isCapitalR) {
  //   resultText = "Result";
  // } else {
  //   resultText = "result";
  // }

  return (
    <div style={{ width: 200, backgroundColor: ourColor, margin: 5 }}>
      {isCapitalR ? (
        <span>I am a Result</span>
      ) : (
        <span>I am a rrrrrresult</span>
      )}
      {showExtraDiv && <div>Extra div</div>}
    </div>
  );
}

export default App;
