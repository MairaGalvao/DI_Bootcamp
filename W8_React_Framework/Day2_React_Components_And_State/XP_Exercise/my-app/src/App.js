// import logo from "./logo.svg";
import "./App.css";

// Exercise 1: Function & JSX

// Exercise 2: Creating A Functional Component
function App() {
  return (
    <>
      {/* <PrintHello /> */}
      <BootstrapCard
        title="McCartney"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg"
        buttonLabel="Go to Wikipedia"
        buttonUrl="https://en.wikipedia.org/wiki/Paul_McCartney"
        description="Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles."
      />
    </>
  );
}

// function PrintHello() {
//   const react = "react";
//   const header1 = (
//     <header>
//       <h1>I love {react}</h1>
//     </header>
//   );
//   const header2 = (
//     <header>
//       <h1> I am a {react} component </h1>
//     </header>
//   );

//   return (
//     <>
//       {header1}
//       {header2}
//     </>
//   );
// }

// exercise 3 -  Bootstrap
// const BootstrapCard = () => {
//   return <>
//   <div className="card m-5" style={{ width: "30rem" }}>
//     <img
//       className="card-img-top"
//       src="https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg"
//       alt="Card image cap"
//     />
//     <div className="card-body">
//       <h5 className="card-title">Bob Dylan</h5>
//       <p className="card-text">
//         Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American
//         singer/songwriter, author, and artist who has been an influential figure
//         in popular music and culture for more than five decades.
//       </p>
//       <a
//         href="https://en.wikipedia.org/wiki/Bob_Dylan"
//         className="btn btn-primary"
//       >
//         Go to wikipedia
//       </a>
//     </div>
//   </div>;
// </>
// }

// exercise 4 -  component properties

// const BootstrapCard = (props) => {
//   const {title, imageUrl, buttonLabel, buttonUrl, description } = props
//   return (
//     <div className="card n-5" style={{ width: "30rem" }}>
//       <img src={imageUrl} alt="Card cap" />
//       <div class="card-body"> </div>
//       <h5 className="card-title"> {title} </h5>
//       <p className="card-text"> {description} </p>
//       <a href={buttonUrl}>{buttonLabel} </a>

//       <h5 className="card-title">{title}</h5>
//     </div>
//   );
// };

// exercise 5 - jumbotrom

export default App;
