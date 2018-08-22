// const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${query}&api_key=3fc3ddd7b32c043fd9f61677911236cc&format=json`

export function runSearch(query){
  const URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + query + '&api_key=3fc3ddd7b32c043fd9f61677911236cc&format=json'
  return (dispatch) => {
    return fetch(URL)
      .then(res => res.json())
      .then(searchResult => {
        dispatch({type: "RUN_SEARCH", payload: searchResult})
    })
  }
}
