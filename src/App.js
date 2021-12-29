import { useReducer, useRef, useEffect } from "react";

// init state
const initState = {
  job: "",
  jobs: [],
};

// action
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => ({ type: SET_JOB, payload });
const addJob = (payload) => ({ type: ADD_JOB, payload });
const deleteJob = (payload) => ({ type: DELETE_JOB, payload });

// reducer
const reducer = (initState, action) => {
  let newState = initState;

  switch (action.type) {
    case SET_JOB:
      newState = { ...initState, job: action.payload };
      break;

    case ADD_JOB:
      newState = { ...initState, jobs: [...initState.jobs, action.payload] };
      break;

    case DELETE_JOB:
      let newJobs = initState.jobs.filter(
        (job, index) => index !== action.payload
      );
      newState = { ...initState, jobs: newJobs };
      break;

    default:
      throw new Error("invalid action");
  }

  console.log(newState);
  return newState;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
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

export default App;
