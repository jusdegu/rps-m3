import React from "react";
import logo from "./img/himpp.png";
import rock from "./img/darock.jpg";
import paper from "./img/paper.png";
import scissors from "./img/scissors.png";
import "./App.css";

let p1Name = "";
let p1Choice = "";

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
    p1Name = this.state.value;
    alert('A name was submitted: ' + p1Name);
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

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", nameSubmitted: false};
  }

  submitName = () => {
    this.setState({nameSubmitted: true});
  }

  myClick(value) {
    p1Choice = value;
    alert("You've selected " + p1Choice + "!");
  }
  render() {
    return (<div class="rowslol">
      <div class="button" onClick={() => this.myClick("Rock")}><img src={rock} className="img-button" alt="rock" /></div>
      <div class="button" onClick={() => this.myClick("Paper")}><img src={paper} className="img-button" alt="paper" /></div>
      <div class="button" onClick={() => this.myClick("Scissors")}><img src={scissors} className="img-button" alt="scissors" /></div>
    </div>);
  }
};

// function TestComponent() {
//   return <h1>This is supposed to be a component.</h1>;
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="him" />

        {/* <div id="my-component">
          <MyComponent name="Master Component" />
        </div> */}

        <GetName name="get-user-name" />
        
        {/* Make button */}
        <ButtonComponent name="Buttons"/>
        
      

      </header>
    </div>
  );
}

export default App;