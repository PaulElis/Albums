import React from 'react'
import {View, Text } from 'react-native'
import AlbumDetail from './AlbumDetail'

const URL = 'https://rallycoding.herokuapp.com/api/music_albums'

class AlbumList extends React.Component {
  state = {
    albums: []
  }

  componentWillMount(){
    fetch(URL)
      .then(response => response.json())
      .then(response =>
        this.setState({
          albums: response
      })
    )
  }

  renderAlbums = () => {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album}/>)
  }

  render(){
    console.log(this.state)
    return(
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}
export default AlbumList
