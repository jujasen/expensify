import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { BrowserRouter, Route } from "react-router-dom";

const ExpenseDashboardPage = () => {
  return (
    <div>
      <h1>Expensify</h1>
    </div>
  );
};

const AddExpensePage = () => {
    return (
      <div>
        <h1>Expensify</h1>
      </div>
    );
  };

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
