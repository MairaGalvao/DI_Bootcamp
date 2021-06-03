import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    console.log("1 constructor");
    super(props);
    this.state = { favoritecolor: "red" };
  }

  // componentWillUnmount() {
  //   setTimeout(() => {
  //     console.log("last componentWillUnmount");
  //     this.setState({ favoritecolor: "black" });
  //   }, 3000);
  // }

  shouldComponentUpdate() {
    console.log("-- comp should update!");
    return false;
  }
  // shouldComponentUpdate? if YES --> render() again --> and let the world know it was updated componentDidUpdate

  componentDidUpdate() {
    setTimeout(() => {
      console.log("3 componentDidUpdate");
      let randomNumber = Math.random();
      this.setState({ favoritecolor: randomNumber });
    }, 4000);
  } //update keeps updating

  componentDidMount() {
    //did mount born, and it born just once as in life
    setTimeout(() => {
      console.log("2 componentDidMount");
      this.setState({ favoritecolor: "yellow" });
    }, 3000);
  }

  render() {
    console.log("render");
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
