class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  handleClick = () => {
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
      // 这样写是正常的，两次setState最后是加2
    }, 3000);
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