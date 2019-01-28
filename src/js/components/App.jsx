import React from "react";
import Home from "./Home";
import { arr } from "./data";
class App extends React.Component {
  state = {
    data: arr
  };
  // handleClick = () => {
  //   this.setState({
  //     value: this.state.value + 1
  //   });
  // };
  // handleClick2 = () => {
  //   this.setState({
  //     value: this.state.value - 1
  //   });
  // };
  render() {
    let response = this.state.data.map((item, index) => {
      return (
        <li key={index}>
          {item.name} , {item.age}
        </li>
      );
    });
    return (
      <div>
        <div className="app">This is app component </div>
        <Home data={this.state.data} />
        {/* <button onClick={(this.handleClick}>ADD</button>
        <button onClick={this.handleClick2}>SUB</button> */}

        {response}
      </div>
    );
  }
}
export default App;
