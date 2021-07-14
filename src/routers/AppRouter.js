import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
<BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={ExpenseDashboardPage} />
      <Route path="/create" exact component={AddExpensePage} />
      <Route path="/edit/:id" exact component={EditExpensePage} />
      <Route path="/help" exact component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter;


