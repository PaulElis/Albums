import React from 'react'
import {ScrollView, Text, View } from 'react-native'
import AlbumDetail from './AlbumDetail'

import { runSearch } from '../actions/actions'
import { connect } from 'react-redux'

// const URL = 'https://rallycoding.herokuapp.com/api/music_albums'

class AlbumList extends React.Component {
  state = {
    albums: null,
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

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      albums: nextProps.albums ? nextProps.albums.album: ''
    }
  }

  componentDidMount(){
    // this.props.runSearch('eminem')
  }

  // handleRunSearch(query){
  //   console.log('in handleRunSearch')
  //   this.props.runSearch(query)
  // }

  renderAlbums = () => {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.url} album={album}/>)
  }

  render(){
    console.log('AlbumList props', this.props)
    console.log('AlbumList state', this.state)
    return(
      <ScrollView>
        {this.state.albums ? this.renderAlbums() : <View><Text>No Albums</Text></View>}
      </ScrollView>
    )
  }
}

function mapStateToProps(state){
  return {
    albums: state.albums.topalbums,
  }
}

export default connect(mapStateToProps, {runSearch})(AlbumList)
