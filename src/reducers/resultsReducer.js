import * as actionTypes from "../actions/actions";

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULTS:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.myexportedresult,
        }),
      };
    case actionTypes.DELETE_RESULTS:
      const updatedArray = state.results.filter(
        (result) => result.id !== action.id
      );
      return {
        ...state,
        results: updatedArray,
      };
  }
  return state;
};

const initialState = {
  results: [
    { id: 1, value: "my first object" },
    { id: 2, value: "my second object" },
  ],
};

export default resultsReducer;
