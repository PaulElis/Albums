const defaultState = {
  query: ''
}

export default function(state=defaultState, action){
  switch(action.type){
    case "RUN_SEARCH":
      return {...state, query: action.payload}
    default:
      return state
  }
}
