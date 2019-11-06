import React from "react";
import "./App.css";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialBalance: 0.0,
      employeeContribution: 0.0,
      employerContribution: 0.0,
      interestRate: 7.0,
      years: 10,
      balance: 0.0
    };
  }

  handleInitialBalanceChange = event => {
    this.setState({ initialBalance: parseFloat(event.target.value) });
  };

  handleEmployeeContributionChange = event => {
    this.setState({ employeeContribution: parseFloat(event.target.value) });
  };

  handleEmployerContributionChange = event => {
    this.setState({ employerContribution: parseFloat(event.target.value) });
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
          handleInitialBalanceChange={
            this.handleInitialBalanceChange
          }
          handleEmployeeContributionChange={
            this.handleEmployeeContributionChange
          }
          handleEmployerContributionChange={
            this.handleEmployerContributionChange
          }
          handleInterestRateChange={this.handleInterestRateChange}
          handleYearsChange={this.handleYearsChange}
          interestRate={this.state.interestRate}
          years={this.state.years}
        />
        <Calculate
          employeeContribution={this.state.employeeContribution}
          employerContribution={this.state.employerContribution}
          interestRate={this.state.interestRate}
          years={this.state.years}
          initialBalance={this.state.initialBalance}
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
  let data = [];
  let totalEmployeeContribution = 0.0;
  let totalEmployerContribution = 0.0;
  let totalInterest = 0.0;

  let i;
  let balance = props.initialBalance;
  for (i = 1; i <= props.years; i++) {
    const interest = balance * (0.01 * props.interestRate);
    balance =
      balance +
      interest +
      props.employeeContribution +
      props.employerContribution;

    // collect data for table display
    totalEmployeeContribution =
      totalEmployeeContribution + props.employeeContribution;
    totalEmployerContribution =
      totalEmployerContribution + props.employerContribution;
    totalInterest = totalInterest + interest;

    let dataEntry = {};
    dataEntry.key = i;
    dataEntry.employeeContribution = props.employeeContribution;
    dataEntry.employerContribution = props.employerContribution;
    dataEntry.totalEmployeeContribution = totalEmployeeContribution;
    dataEntry.totalEmployerContribution = totalEmployerContribution;
    dataEntry.totalInterest = totalInterest;
    dataEntry.balance = dataEntry.balance || 0 + balance;
    data.push(dataEntry);
  }

  return (
    <div>
      <h3>Balance: {StyleCurrency(balance)}</h3>

      <Table style={{ tableLayout: "auto" }}>
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell>Total Employee Contribution</TableCell>
            <TableCell>Total Employer Contribution</TableCell>
            <TableCell>Total Interest Earned</TableCell>
            <TableCell>Total Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(dataEntry => (
            <TableRow key={dataEntry.key}>
              <TableCell>{dataEntry.key}</TableCell>
              <TableCell align="right">
                {StyleCurrency(dataEntry.totalEmployeeContribution)}
              </TableCell>
              <TableCell align="right">
                {StyleCurrency(dataEntry.totalEmployerContribution)}
              </TableCell>
              <TableCell align="right">
                {StyleCurrency(dataEntry.totalInterest)}
              </TableCell>
              <TableCell align="right">
                {StyleCurrency(dataEntry.balance)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function StyleCurrency(value) {
  if (isNaN(value)) {
    return "";
  } else {
    return value.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
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
            <TableCell style={{ width: "50%", border: "none" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="right" style={{ border: "none" }}>
              <label>Initial Balance</label>
            </TableCell>
            <TableCell style={{ border: "none" }}>
              <input
                type="number"
                onChange={props.handleInitialBalanceChange}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" style={{ border: "none" }}>
              <label>Employee Contribution (Yearly)</label>
            </TableCell>
            <TableCell style={{ border: "none" }}>
              <input
                type="number"
                onChange={props.handleEmployeeContributionChange}
                value={props.employeeContribution}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" style={{ border: "none" }}>
              <label>Employer Contribution (Yearly)</label>
            </TableCell>
            <TableCell style={{ border: "none" }}>
              <input
                type="number"
                onChange={props.handleEmployerContributionChange}
                value={props.employerContribution}
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
