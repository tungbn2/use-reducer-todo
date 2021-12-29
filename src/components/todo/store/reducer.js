import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constants";

// init state
export const initState = {
  job: "",
  jobs: [],
};

// reducer
export const reducer = (initState, action) => {
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

  return newState;
};
