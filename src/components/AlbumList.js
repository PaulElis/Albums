import React from 'react'
import {ScrollView, Text, View } from 'react-native'
import AlbumDetail from './AlbumDetail'

import { runSearch } from '../actions/actions'
import { connect } from 'react-redux'

// const URL = 'https://rallycoding.herokuapp.com/api/music_albums'

class AlbumList extends React.Component {
  // state = {
  //   albums: []
  // }

  // componentWillMount(){
  //   fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=eminem&api_key=3fc3ddd7b32c043fd9f61677911236cc&format=json')
  //     .then(response => response.json())
  //     .then(response =>
  //       this.setState({
  //         albums: response.topalbums.album
  //     })
  //   )
  // }

  componentDidMount(){
    console.log('in did mount')
    this.props.runSearch('eminem')
  }

  handleRunSearch(query){
    console.log('in handleRunSearch')
    this.props.runSearch(query)
  }

  renderAlbums = () => {
    return this.props.albums.topalbums.album.map(album =>
      <AlbumDetail key={album.url} album={album}/>)
  }

  render(){
    console.log('AlbumList props', this.props)
    return(
      <ScrollView>
        {this.props.albums.length ? this.renderAlbums() : <View><Text>No Albums</Text></View>}
        {/* {this.renderAlbums()} */}
      </ScrollView>
    )
  }
}

function mapStateToProps(state){
  return {
    albums: state.albums,
  }
}

// export default Header
export default connect(mapStateToProps, {runSearch})(AlbumList)
// export default AlbumList
