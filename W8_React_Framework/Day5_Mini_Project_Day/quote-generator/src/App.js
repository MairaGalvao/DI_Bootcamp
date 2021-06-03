import React from 'react';
import quotes from './QuotesDatabase';
//props

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        quotesList: quotes,
        random: 0
      }
    }
    getRandom = () => {
      return Math.floor(Math.random() * this.state.quotesList.length);
    }
    handleClick = () => {
       this.setState({random: this.getRandom()})
    }
    render() {
      // console.log(quotes)
      const {quotesList, random} = this.state
      // console.log(random)
      return (
        // <Quotes quotesList={quotesList} random={random} handleClick={this.handleClick}>
        <div style={{backgroundColor: "red"}}>
  
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