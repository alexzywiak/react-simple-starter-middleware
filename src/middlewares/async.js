export default function ({ dispatch }) {
  return next => action => {
    
    // Pass on any actions that don't have promises
    if(!action.payload || !action.payload.then){
      return next(action);
    }

    // Resolve the promise
    action.payload
      .then(response => {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });
  };
}