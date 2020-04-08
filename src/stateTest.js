import React, { useS, Fragment } from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props)
      this.state = { count: 0 }
    }
    handleClick = () => {
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
      // 这样写只会加1
    }
    handleClickFn = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 }
      })
      this.setState((prevState) => {
        return { count: prevState.count + 1 }
      })
    }
    render() {
      return (
        <>
          Count: {this.state.count}
          <button onClick={this.handleClick}>+</button>
          <button onClick={this.handleClickFn}>+</button>
        </>
      );
    }
  }
  export default Counter;