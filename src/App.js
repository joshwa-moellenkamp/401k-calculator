import React from "react";
import "./App.css";
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleContributionChange = this.handleContributionChange.bind(this);
    this.state = {
      contribution: 0.0,
      interestRate: 7.0,
      years: 10,
      balance: 0.0
    };
  }

  handleContributionChange = event => {
    this.setState({ contribution: parseFloat(event.target.value) });
  };

  handleInterestRateChange = event => {
    this.setState({ interestRate: parseFloat(event.target.value) });
  };

  handleYearsChange = event => {
    this.setState({ years: parseFloat(event.target.value) });
  };

  render() {
    return (
      <div className="App">
        <h3>401k Calculator</h3>
        <p>
          Configure the yearly contribution for employee and employer, predicted
          interest return, number of years, and compounding method to predict
          financial independence.
        </p>
        <Calculator
          handleContributionChange={this.handleContributionChange}
          handleInterestRateChange={this.handleInterestRateChange}
          handleYearsChange={this.handleYearsChange}
          interestRate={this.state.interestRate}
          years={this.state.years}
        />
        <Calculate
          contribution={this.state.contribution}
          interestRate={this.state.interestRate}
          years={this.state.years}
          balance={this.state.balance}
        />
        {/* <Display
          contribution={this.state.contribution}
          interestRate={this.state.interestRate}
          years={this.state.years}
        /> */}
      </div>
    );
  }
}

function Calculate(props) {
  let i;
  let balance = props.balance;
  for (i = 1; i <= props.years; i++) {
    const interest = balance * (0.01 * props.interestRate);
    balance = balance + interest + props.contribution;
  }

  return (
    <div>
      <h3>Balance: {StyleCurrency(balance)}</h3>

      {/* <Table style={{ tableLayout: "auto" }}>
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell>Total Contribution</TableCell>
            <TableCell>Total Interest Earned</TableCell>
            <TableCell>Total Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item}>
              <TableCell>
                <GreenButton variant="contained" onClick={(e) => challengeCompleted(item)}>
                  Complete
                </GreenButton>
              </TableCell>
              <TableCell>
                {item}
              </TableCell>
              <TableCell>
                {challenges.get(item).points}
              </TableCell>
              <TableCell>
                {challenges.get(item).description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </div>
  );
}

function StyleCurrency(value) {
  return value.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
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
      <Table style={{ tableLayout: "auto" }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "50%", border: "none" }}></TableCell>
            <TableCell style={{ width: "50%", border: "none"}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="right" style={{ border: "none" }}>
              <label>Contribution (Yearly)</label>
            </TableCell>
            <TableCell style={{ border: "none" }}>
              <input
                type="number"
                onChange={props.handleContributionChange}
                value={props.contribution}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" style={{ border: "none" }}>
              <label>Interest Percentage</label>
            </TableCell>
            <TableCell style={{ border: "none" }}>
              <input
                type="number"
                onChange={props.handleInterestRateChange}
                value={props.interestRate}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" style={{ border: "none" }}>
              <label>Years</label>
            </TableCell>
            <TableCell style={{ border: "none" }}>
              <input
                type="number"
                onChange={props.handleYearsChange}
                value={props.years}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
