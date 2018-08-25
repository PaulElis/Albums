import React from 'react'
import {View, Text, Image, Linking} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({album}) => {
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles

  return(
    <Card>
      <CardSection>
        {/* <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{uri: props.thumbnail_image}}
          />
        </View> */}
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{album.name !== '(null)' ? album.name : 'Artist'}</Text>
          <Text onPress={() => Linking.openURL(album.artist.url)}>
            {album.artist.name}
          </Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={album.image[2]['#text'] ?
           {uri: album.image[2]['#text']} : {uri: 'https://static.vecteezy.com/system/resources/previews/000/017/933/non_2x/vector-free-vinyl-record.jpg'}}
         />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(album.url)}>
          View Album
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexGrow: 1,
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetail
