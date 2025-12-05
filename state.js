import React from "react";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 }); 
  };

    decreaseCount = () => {
    this.setState({ count: this.state.count - 1 }); 
  };

  resetCount = () => {
    this.setState({ count: this.state.count=0}); 
  };

  render() {
    return (
        <div>
             <span>
                 Count: {this.state.count}
             </span><br></br>
      <button onClick={this.increaseCount}>Increase</button>
      <button onClick={this. decreaseCount}>Decrease</button>
      <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}
export default MyComponent;