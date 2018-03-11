const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case 'SUB':
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({
          id: new Date().getTime(), // a number of Date
          value: state.counter,
        }),
      };
    case 'DELETE_RESULT':
      return {
        ...state,
        results: state.results.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
