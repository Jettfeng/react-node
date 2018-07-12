const ADD_NUM = 'add';
const REDUCE_NUM = 'reduce';
export function counter (state = 0, action) {
  switch (action.type) {
    case ADD_NUM:
      return state + 1;
    case REDUCE_NUM:
      return state - 1;
    default:
      return 10;
  }
}

// action creator
export function addNum () {
  return {type: ADD_NUM};
}
export function reduceNum () {
  return {type: REDUCE_NUM};
}
