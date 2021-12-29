function logger(reducer) {
  return (prevState, action) => {
    console.group(action.tpe);
    console.log("prevState", prevState);
    const newState = reducer(prevState, action);
    console.log("nextState", newState);
    console.groupEnd();
    return newState;
  };
}

export default logger;
