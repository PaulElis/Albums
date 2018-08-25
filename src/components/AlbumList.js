import React from 'react'
import {ScrollView, Text, View } from 'react-native'
import AlbumDetail from './AlbumDetail'
import ArtistDetail from './ArtistDetail'

import { runSearch } from '../actions/actions'
import { connect } from 'react-redux'

class AlbumList extends React.Component {
  state = {
    albums: null,
    artists: null,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      albums: nextProps.albums ? nextProps.albums.album : null,
      artists: nextProps.albums === null ? null : '',
    }
  }

  componentDidMount(){
    this.fetchArtists()
  }

  fetchArtists = () => {
    fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=3fc3ddd7b32c043fd9f61677911236cc&format=json')
      .then(res => res.json())
      .then(artists => this.setState({
        artists: artists.artists.artist})
      )
  }

  renderAlbums = () => {
    return this.state.albums ? this.state.albums.map(album =>
      <AlbumDetail key={album.url} album={album}/>) : ''
  }

  renderArtists = () => {
    return this.state.artists ? this.state.artists.map(artist =>
      <ArtistDetail key={artist.url} artist={artist}/>) : ''
  }

  render(){
    console.log('AlbumList state:', this.state)
    return(
      <ScrollView>
        {this.state.artists ? this.renderArtists() : this.renderAlbums()}
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
