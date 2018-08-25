const defaultState = {
  query: '',
  albums: [],
  artists: null
}

export default function(state=defaultState, action){
  switch(action.type){
    case "RUN_SEARCH":
      return {albums: action.payload}
    default:
      return state
  }
}
