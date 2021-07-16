//Set text filter - FUNCTION
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

//Sort by amount - FUNCTION
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

//Sort by date - FUNCTION
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

//Set start date - FUNCTION
export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

//Set end date - FUNCTION
export const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
