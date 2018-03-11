import { actionTypes } from './constant';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  console.log(action);
  
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date().getTime(), // a number of Date
          value: action.counter,
        }),
      };
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
