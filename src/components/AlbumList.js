import React from 'react'
import {View, Text} from 'react-native'

// const URL = 'https://rallycoding.herokuapp.com/api/music_albums'

class AlbumList extends React.Component {

  // componentWillMount(){
  //   axios.get(URL)
  //     .then(response => console.log(response))
  // }

  // componentWillMount(){
  //   fetch(URL)
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }

  render(){
    return(
      <View>
        <Text>Album List</Text>
      </View>
    )
  }
}
export default AlbumList
