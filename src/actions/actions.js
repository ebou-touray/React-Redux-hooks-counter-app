export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const RESET = "RESET";

export const STORE_RESULTS = "STORE_RESULTS";
export const DELETE_RESULTS = "DELETE_RESULTS";

export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});
export const add = () => ({
  type: ADD,
  value: 5,
});
export const remove = () => ({
  type: REMOVE,
  value: 5,
});
export const reset = () => ({
  type: RESET,
});

export const storeResult = (currentState) => ({
  type: STORE_RESULTS,
  myexportedresult: currentState,
});
export const deleteResult = (id) => ({
  type: DELETE_RESULTS,
  id: id,
});
