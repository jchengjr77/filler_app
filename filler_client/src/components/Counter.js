import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./Counter.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      sentences: []
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  newSentence = currCount => {
    this.setState({
      count: 0,
      sentences: [...this.state.sentences, currCount]
    });
  };

  showSentences = () => {
    console.log("Current sentence: " + this.state.count);
    console.log("History: " + this.state.sentences);
  };

  render() {
    let element = this.state.count;
    return (
      <div>
        <h1 className="mainCounter">{element}</h1>
        <h4>Number of times filler words are used (per sentence)</h4>
        <div style={{ flex: 1, flexDirection: "row" }}>
          <AwesomeButton
            type="secondary"
            onPress={this.decrementCount}
            size="medium"
          >
            -
          </AwesomeButton>
          <AwesomeButton
            type="secondary"
            onPress={this.incrementCount}
            size="medium"
          >
            +
          </AwesomeButton>
        </div>
        <div style={{ flex: 1, margin: 20 }}>
          <AwesomeButton
            type="primary"
            onPress={() => this.newSentence(this.state.count)}
            size="large"
          >
            New Sentence
          </AwesomeButton>
        </div>
        <div style={{ flex: 1, margin: 20 }}>
          <AwesomeButton
            type="secondary"
            onPress={() => this.showSentences(this.state.count)}
            size="large"
          >
            Show Sentences
          </AwesomeButton>
        </div>
      </div>
    );
  }
}
