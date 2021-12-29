import { useReducer, useRef, useEffect } from "react";
import { addJob, deleteJob, setJob } from "./store/actions";
import logger from "./store/logger";
import { reducer, initState } from "./store/reducer";

export default function Todo() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h2>Todo</h2>
      <input
        ref={inputRef}
        value={job}
        placeholder="Add todo ..."
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(addJob(job));
          dispatch(setJob(""));
          inputRef.current.focus();
        }}
      >
        Add
      </button>
      <hr />
      <ul>
        {jobs.map((jobName, index) => (
          <li key={index}>
            {jobName} -{" "}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
