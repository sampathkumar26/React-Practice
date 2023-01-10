import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "./style/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

class App extends Component {
  state = { lat: null, long: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error Message: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} long={this.state.long} />;
    }

    return <Spinner message="Please allow the location request."></Spinner>;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

root.render(<App />);
