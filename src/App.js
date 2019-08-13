import React from 'react';

class App extends React.Component {
  state ={
    isLoading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading:false});
    }, 1000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading" : "view movie"}
      </div>
    );
  }
}

export default App;
