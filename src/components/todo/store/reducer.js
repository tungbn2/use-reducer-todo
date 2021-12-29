import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constants";

// init state
export const initState = {
  job: "",
  jobs: [],
};

// reducer
export const reducer = (initState, action) => {
  switch (action.type) {
    case SET_JOB:
      return { ...initState, job: action.payload };

    case ADD_JOB:
      return { ...initState, jobs: [...initState.jobs, action.payload] };

    case DELETE_JOB:
      let newJobs = initState.jobs.filter(
        (job, index) => index !== action.payload
      );
      return { ...initState, jobs: newJobs };

    default:
      throw new Error("invalid action");
  }
};
