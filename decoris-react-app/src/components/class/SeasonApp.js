import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./components/class/SeasonDisplay";
import Spinner from "./components/functional/Spinner"

class SeasonApp extends React.Component {

    constructor(props) {
      super(props);
      this.state = { latitude: null, errorMessage: "" }
  
  
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          this.setState({ latitude: position.coords.latitude })
        },
        (err) => {
          this.setState({ errorMessage: err.message })
        }
      );
    }
  
    render() {
      if (this.state.errorMessage && !this.state.latitude) {
        return <div>Error: {this.state.errorMessage}</div>
      }
      if (!this.state.errorMessage && this.state.latitude) {
        return <SeasonDisplay latitude={this.state.latitude} />
      }
      return <Spinner message="Please allow to access location!"/>
    }
  
  }