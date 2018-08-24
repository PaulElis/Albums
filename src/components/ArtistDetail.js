import React from 'react'
import {View, Text, Image, Linking} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const ArtistDetail = ({artist}) => {
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
        <View style={thumbnailContainerStyle}>
          {/* <Image
            style={thumbnailStyle}
            source={{uri: props.thumbnail_image}}
          /> */}
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{artist.name}</Text>
          {/* <Text onPress={() => Linking.openURL(artist.url)}>
            {artist.name}
          </Text> */}
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{uri: artist.image[2]['#text']}}
         />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(artist.url)}>
          View Artist
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 22
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

export default ArtistDetail
