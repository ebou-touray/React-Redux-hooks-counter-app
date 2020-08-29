import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increase, decrease, add, remove, reset } from "../actions/actions";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const notes = useSelector((state) => state.counter.notes);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counts: {counter}</h1>
      <h1>Notes: {notes}</h1>
      <button onClick={() => dispatch(increase())}>Increase one</button>
      <button onClick={() => dispatch(decrease())}>Decrease one</button>
      <button onClick={() => dispatch(add())}>Add five</button>
      <button onClick={() => dispatch(remove())}>Remove five</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
