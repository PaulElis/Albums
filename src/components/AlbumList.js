import React from 'react'
import {ScrollView, Text } from 'react-native'
import AlbumDetail from './AlbumDetail'

// const URL = 'https://rallycoding.herokuapp.com/api/music_albums'

class AlbumList extends React.Component {
  state = {
    albums: []
  }

  // componentWillMount(){
  //   fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=eminem&api_key=3fc3ddd7b32c043fd9f61677911236cc&format=json')
  //     .then(response => response.json())
  //     .then(response =>
  //       this.setState({
  //         albums: response.topalbums.album
  //     })
  //   )
  // }

  runSearch = (query) => {
    console.log(`in runSearch and ${query}`)
    // fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=eminem&api_key=3fc3ddd7b32c043fd9f61677911236cc&format=json')
    //   .then(response => response.json())
    //   .then(response =>
    //     this.setState({
    //       albums: response.topalbums.album
    //   })
    // )
  }

  renderAlbums = () => {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.url} album={album}/>)
  }

  render(){
    // console.log(this.state)
    return(
      <ScrollView>
        {this.state.albums ? this.renderAlbums() : null}
      </ScrollView>
    )
  }
}
export default AlbumList
