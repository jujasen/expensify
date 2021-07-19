import React from "react";
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { checkPropTypes } from "prop-types";
import { addExpense } from "../actions/expenses";

const AddExpensePage = (props) => {
    return (
      <div>
        <h1>add expenses</h1>
        <ExpenseForm
          onSubmit={(expense) => {
            props.dispatch(addExpense(expense));
        props.history.push('/');
          }}
        />
      </div>
    );
  };

export default connect()(AddExpensePage);