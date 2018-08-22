const defaultState = {
  query: '',
  albums: []
}

export default function(state=defaultState, action){
  switch(action.type){
    case "RUN_SEARCH":
      return {...state, albums: action.payload}
    default:
      return state
  }
}
