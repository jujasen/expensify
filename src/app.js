import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from './routers/AppRouter';
import configureStore from './store/configueStore';
import { addExpense, removeExpense, Editexpense } from "./actions/expenses";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";


//CCREATE STORE
const store = configureStore();

//SUBBSCRIBE TO STORE
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
  });

//CALL EXPENSE ACTIONS
const expense1 = store.dispatch( addExpense( { description: 'water bill', amount: 200} ) );
const expense2 = store.dispatch( addExpense( { description: 'gas bill', amount: 0} ) );
const expense3 = store.dispatch( addExpense( { description: 'rent', amount: 109500} ) );


// //CALL FILTER ACTIONS
// const textFilter = store.dispatch(setTextFilter("water"));


const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));
