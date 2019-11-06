(this["webpackJsonp401k-calculator"]=this["webpackJsonp401k-calculator"]||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),o=a.n(r),i=(a(27),a(16)),u=a(9),c=a(17),m=a(18),s=a(20),h=(a(28),a(47)),y=a(49),E=a(50),b=a(51),p=a(48);function C(e){var t,a=[],n=0,r=0,o=0,i=e.initialBalance;for(t=1;t<=e.years;t++){var u=i*(.01*e.interestRate);i=i+u+e.employeeContribution+e.employerContribution,n+=e.employeeContribution,r+=e.employerContribution,o+=u;var c={};c.key=t,c.employeeContribution=e.employeeContribution,c.employerContribution=e.employerContribution,c.totalEmployeeContribution=n,c.totalEmployerContribution=r,c.totalInterest=o,c.balance=c.balance||0+i,a.push(c)}return l.a.createElement("div",null,l.a.createElement("h3",null,"Balance: ",g(i)),l.a.createElement(h.a,{style:{tableLayout:"auto"}},l.a.createElement(p.a,null,l.a.createElement(y.a,null,l.a.createElement(b.a,null,"Year"),l.a.createElement(b.a,null,"Total Employee Contribution"),l.a.createElement(b.a,null,"Total Employer Contribution"),l.a.createElement(b.a,null,"Total Interest Earned"),l.a.createElement(b.a,null,"Total Balance"))),l.a.createElement(E.a,null,a.map((function(e){return l.a.createElement(y.a,{key:e.key},l.a.createElement(b.a,null,e.key),l.a.createElement(b.a,{align:"right"},g(e.totalEmployeeContribution)),l.a.createElement(b.a,{align:"right"},g(e.totalEmployerContribution)),l.a.createElement(b.a,{align:"right"},g(e.totalInterest)),l.a.createElement(b.a,{align:"right"},g(e.balance)))})))))}function g(e){return isNaN(e)?"":e.toLocaleString(void 0,{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2})}function d(e){return l.a.createElement("div",null,l.a.createElement(h.a,{style:{tableLayout:"auto"}},l.a.createElement(p.a,null,l.a.createElement(y.a,null,l.a.createElement(b.a,{style:{width:"50%",border:"none"}}),l.a.createElement(b.a,{style:{width:"50%",border:"none"}}))),l.a.createElement(E.a,null,l.a.createElement(y.a,null,l.a.createElement(b.a,{align:"right",style:{border:"none"}},l.a.createElement("label",null,"Initial Balance")),l.a.createElement(b.a,{style:{border:"none"}},l.a.createElement("input",{type:"number",onChange:e.handleInitialBalanceChange}))),l.a.createElement(y.a,null,l.a.createElement(b.a,{align:"right",style:{border:"none"}},l.a.createElement("label",null,"Employee Contribution (Yearly)")),l.a.createElement(b.a,{style:{border:"none"}},l.a.createElement("input",{type:"number",onChange:e.handleEmployeeContributionChange,value:e.employeeContribution}))),l.a.createElement(y.a,null,l.a.createElement(b.a,{align:"right",style:{border:"none"}},l.a.createElement("label",null,"Employer Contribution (Yearly)")),l.a.createElement(b.a,{style:{border:"none"}},l.a.createElement("input",{type:"number",onChange:e.handleEmployerContributionChange,value:e.employerContribution}))),l.a.createElement(y.a,null,l.a.createElement(b.a,{align:"right",style:{border:"none"}},l.a.createElement("label",null,"Interest Percentage")),l.a.createElement(b.a,{style:{border:"none"}},l.a.createElement("input",{type:"number",onChange:e.handleInterestRateChange,value:e.interestRate}))),l.a.createElement(y.a,null,l.a.createElement(b.a,{align:"right",style:{border:"none"}},l.a.createElement("label",null,"Years")),l.a.createElement(b.a,{style:{border:"none"}},l.a.createElement("input",{type:"number",onChange:e.handleYearsChange,value:e.years}))))))}var v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleInitialBalanceChange=function(e){a.setState({initialBalance:parseFloat(e.target.value)})},a.handleEmployeeContributionChange=function(e){a.setState({employeeContribution:parseFloat(e.target.value)})},a.handleEmployerContributionChange=function(e){a.setState({employerContribution:parseFloat(e.target.value)})},a.handleInterestRateChange=function(e){a.setState({interestRate:parseFloat(e.target.value)})},a.handleYearsChange=function(e){a.setState({years:parseFloat(e.target.value)})},a.state={initialBalance:0,employeeContribution:0,employerContribution:0,interestRate:7,years:10,balance:0},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h3",null,"401k Calculator"),l.a.createElement("p",null,"Configure the yearly contribution for employee and employer, predicted interest return, number of years, and compounding method to predict financial independence."),l.a.createElement(d,{handleInitialBalanceChange:this.handleInitialBalanceChange,handleEmployeeContributionChange:this.handleEmployeeContributionChange,handleEmployerContributionChange:this.handleEmployerContributionChange,handleInterestRateChange:this.handleInterestRateChange,handleYearsChange:this.handleYearsChange,interestRate:this.state.interestRate,years:this.state.years}),l.a.createElement(C,{employeeContribution:this.state.employeeContribution,employerContribution:this.state.employerContribution,interestRate:this.state.interestRate,years:this.state.years,initialBalance:this.state.initialBalance}))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.9b3659a2.chunk.js.map