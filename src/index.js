import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

class NumberShower extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}

class Squares extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
  }

  sendData = event => {
    this.props.parentCallback(this.state.value);
  };

  render() {
    return (
      <button onClick={this.sendData} className="Square">
        {" "}
        {this.state.value}{" "}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toShow: 0 };
  }

  getData = msg => {
    let toAdd = msg;
    if (this.state.toShow !== 0) {
      toAdd = "" + this.state.toShow + msg;
    }

    this.setState({ toShow: toAdd });
  };

  render() {
    return (
      <div>
        <div>
          <NumberShower value={this.state.toShow} />
        </div>
        <div>
          <Squares parentCallback={this.getData} value="7" />
          <Squares parentCallback={this.getData} value="8" />
          <Squares parentCallback={this.getData} value="9" />
        </div>
        <div>
          <Squares parentCallback={this.getData} value="4" />
          <Squares parentCallback={this.getData} value="5" />
          <Squares parentCallback={this.getData} value="6" />
        </div>
        <div>
          <Squares parentCallback={this.getData} value="1" />
          <Squares parentCallback={this.getData} value="2" />
          <Squares parentCallback={this.getData} value="3" />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Board />, rootElement);
