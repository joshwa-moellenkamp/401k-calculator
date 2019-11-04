import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleContributionChange = this.handleContributionChange.bind(this);
    this.state = { contribution: 0.0, interestRate: 7.0, years: 10, balance: 0.0 };
  }

  handleContributionChange = event => {
    this.setState({ contribution: parseFloat(event.target.value) });
  };

  handleInterestRateChange = event => {
    this.setState({ interestRate: parseFloat(event.target.value) });
  };

  render() {
    return (
      <div className="App">
        <Calculator
          handleContributionChange={this.handleContributionChange}
          handleInterestRateChange={this.handleInterestRateChange}
          interestRate={this.state.interestRate}
          years={this.state.years}
        />
        <Calculate
          contribution={this.state.contribution}
          interestRate={this.state.interestRate}
          years={this.state.years}
          balance={this.state.balance}
        />
        <Display
          contribution={this.state.contribution}
          interestRate={this.state.interestRate}
          years={10}
        />
      </div>
    );
  }
}

function Calculate(props) {
  let i;
  let balance = props.balance;
  for(i = 1; i <= props.years; i++) {
    const interest = balance * (.01 * props.interestRate);
    balance = balance + interest + props.contribution;
  }

  return(
    <h1>Balance: {StyleCurrency(balance)}</h1>
  );
}

function StyleCurrency(value) {
  return value.toLocaleString(undefined, {style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits:2})
}

function Display(props) {
  return (
    <div>
      <h5>Contribution: {StyleCurrency(props.contribution)}</h5>
      <h5>Interest Rate: {props.interestRate}%</h5>
      <h5>Years: {props.years}</h5>
    </div>
  );
}

function Calculator(props) {
  return (
    <div>
      <label>
        Contribution (Yearly)
        <input
          type="number"
          onChange={props.handleContributionChange}
          value={props.contribution}
        />
      </label>
      <p />
      <label>
        Interest Percentage (Compounded Yearly)
        <input
          type="number"
          onChange={props.handleInterestRateChange}
          value={props.interestRate}
        />
      </label>
    </div>
  );
}

export default App;
