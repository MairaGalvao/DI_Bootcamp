import "./App.css";

const data = [
  {
    title: "About the Company",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Our Values",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Our Mission",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const divStyle = {
  backgroundColor: "lightGray",
  padding: "0px",
  margin: "30px",
  fontFamily: "Arial",
  textIndent: "200px",
};

function App() {
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <div style={divStyle}></div>

            <h1> {item.title} </h1>
            <p> {item.info} </p>
          </>
        );
      })}
    </>
  );
}

// const title = {
//   backgroundColor: "lightBlue",
//   textAlign: "center",
// };

// function App2() {
//   return (
//     <>
//       <div style={title}>
//         <h2>Company </h2>
//         <p>We specialize in something...</p>
//       </div>
//     </>
//   );
// }
export default App;
