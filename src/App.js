import React, {Component} from "react";
import logo from "./img/himpp.png";
import rock from "./img/darock.jpg";
import paper from "./img/paper.png";
import scissors from "./img/scissors.png";
import "./App.css";

// let p1Name = "";
// let p1Choice = "";

// class MyComponent extends React.Component {
//   render() {
//     return <div className="my-component">Spawn of Satan</div>;
//   }
// };

class GetName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    this.props.handleName(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function ButtonComponent (props) {

  function myClick(value) {
    // alert("You've selected " + value + "!");
    props.handleClick(value);
  }

  return (
    <div class="rowwide">
      <div><h2>Welcome {props.p1Name}!</h2></div>
      <div><h3>Click a button.</h3></div>
      <div class="rowslol">
        <div class="button" onClick={() => myClick("Rock")}><img src={rock} className="img-button" alt="rock" /></div>
        <div class="button" onClick={() => myClick("Paper")}><img src={paper} className="img-button" alt="paper" /></div>
        <div class="button" onClick={() => myClick("Scissors")}><img src={scissors} className="img-button" alt="scissors" /></div>
      </div>
    </div>
  );

};

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { submitted: false, p1Choice: "", p1Name: "", selection: false };
    this.pcChoice = "";
  }

  handleClick = (value) => {
    this.setState({ p1Choice: value, selection: true });
  };

  handleName = (name) => {
    this.setState({ p1Name: name, submitted: true });
  };
  
  randomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let ran = Math.floor(Math.random() * (max - min)) + min;

    console.log("Random number is: " + ran);

    if (ran === 1){
      return "Rock";
    }
    else if (ran === 2) {
      return "Paper";
    }
    else {
      return "Scissors";
    }
  };

  // Rock, Paper, Scissors
  analyze = () => {
    this.pcChoice = this.randomNum(1, 4);
    if ((this.state.p1Choice === "Rock" && this.pcChoice === "Scissors") || 
    (this.state.p1Choice === "Paper" && this.pcChoice === "Rock") ||
    (this.state.p1Choice === "Scissors" && this.pcChoice === "Paper"))
      return 1;
    else if (this.state.p1Choice === this.pcChoice)
      return 3;
    else
      return 2;
  }

  render() {
    let event;
    let result;

    if (this.state.p1Name === "") {
      event = <GetName name="get-user-name" handleName={this.handleName}/>;
    }
    else {
      event = <ButtonComponent p1Name={this.state.p1Name} handleClick={this.handleClick}/>;
    }

    if (this.state.selection === true) {
      let playerWon = this.analyze();

      console.log("Result: " + playerWon);

      if (playerWon === 1) {
        result = <div><h1>You win!</h1> <h2>You selected {this.state.p1Choice}. PC selected {this.pcChoice}</h2></div>;
      }
      else if (playerWon === 2) {
        result = <div><h1>You lose!</h1> <h2>You selected {this.state.p1Choice}. PC selected {this.pcChoice}</h2></div>;
      }
      else {
        result = <div><h1>The game is tied!</h1> <h2>You selected {this.state.p1Choice}. PC selected {this.pcChoice}</h2></div>;
      }
    }

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="spawn of satan" />
        {event}
        {result}
      </header>
    </div>
    
    );
  }
}

export default App;