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
    alert('A name was submitted: ' + this.state.value);
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
    alert("You've selected " + value + "!");
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
  }

  handleClick = (value) => {
    this.setState({ p1Choice: value, selection: true });
  };

  handleName = (name) => {
    this.setState({ p1Name: name, submitted: true });
  };

  playerKnown() {
    let pcChoice = function () {
        function randomNum (min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floow(Math.random() * (max - min)) + min;
        }
        
        let pcNum = randomNum(1, 3);
        return pcNum;
    };
    if (this.state.p1Choice == "Rock" && pcChoice == 2) {
      return false;
    }
    return false;
  }

  // pcSelector = () => {
  //   function randomNum (min, max) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floow(Math.random() * (max - min)) + min;
  //   }
    
  //   let pcNum = randomNum(1, 3);
  //   return pcNum;
  // }

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
      let playerWon = function () {
        // do win/lose logic stuff in here
      };
      (playerWon) ? result = <h1>You win!</h1> : result = <h1>You lose! :(</h1>;
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