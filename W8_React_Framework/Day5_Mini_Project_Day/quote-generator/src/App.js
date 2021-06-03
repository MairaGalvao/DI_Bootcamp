import React from 'react';
import quotes from './QuotesDatabase';

//components are like JavaScript functions, there are two types of components, functional and class component

  //extending a new component in a class component called app.
class App extends React.Component {
  //The constructor for a React component is called before it is mounted. 
  //When implementing the constructor for a React.Component subclass, 
  //you should call super(props) before any other statement.
  //https://reactjs.org/docs/react-component.html#constructor
    constructor() {
      super();
      this.state = {  
        //Initializing local state by assigning an object to this.state - thats why I needed the constructor
        quotesList: quotes,
        random: 0 
      }
    }
    getRandom = () => {
      return Math.floor(Math.random() * this.state.quotesList.length);
      
    }
    handleClick = () => {
       this.setState({random: this.getRandom()})
       //setState() schedules an update to a component’s state object.
       // When state changes, the component responds by re-rendering.
    }
    render() {
      // console.log(quotes)
      const {quotesList, random} = this.state
      // console.log(random)
      return (
        // <Quotes quotesList={quotesList} random={random} handleClick={this.handleClick}>
        <div style={{backgroundColor: "blue"}}>
  
        <div>
          <header> {quotesList[random].quote} </header>
        </div>
        <h1>
          {quotesList[random].author}
        </h1>
        <button onClick={this.handleClick}>Get New Quotes</button>
        </div>
      )
    }
}
export default App;