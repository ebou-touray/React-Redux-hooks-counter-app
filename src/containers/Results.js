import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeResult, deleteResult } from "../actions/actions";

const Results = () => {
  const results = useSelector((state) => state.results.results);
  const currentState = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(storeResult(currentState))}>
        Store the results
      </button>
      <ul>
        {results.map((item) => (
          <li onClick={() => dispatch(deleteResult(item.id))} key={item.id}>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
