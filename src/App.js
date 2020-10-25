import { Component } from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     lat: null,
  //     errorMsg: ''
  //   };
  // }

  state = {
    lat: null,
    errorMsg: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMsg: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component just updated")
  }

  renderContent() {
    if (this.state.errorMsg && !this.state.lat) {
      return (
        <div>
            Error : {this.state.errorMsg}
         </div>
      );
    }

    if (!this.state.errorMsg && this.state.lat) {
      return (<SeasonDisplay lat={this.state.lat} />
      );
    }

    return "Loading !!"

  }

  render() {
    return(
      <div>
        <div className="App">
          <header className="App-header">
            {this.renderContent()}
          </header>
        </div>
      </div>
    );
  }
}
export default App;
