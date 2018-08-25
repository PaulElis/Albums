import React from 'react'
import {View, Text, Image, Linking} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

// const ArtistDetail = ({artist}) => {
class ArtistDetail extends React.Component {

  numberFormat = (num) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(num)) >= 1.0e+9
       ? Math.abs(Number(num)) / 1.0e+9 + "B"
       // Six Zeroes for Millions
       : Math.abs(Number(num)) >= 1.0e+6
       ? Math.round(Number(num).toString().slice(0,2)) / 1.0e+1 + "M"
       // Three Zeroes for Thousands
       : Math.abs(Number(num)) >= 1.0e+3
       ? Math.round(Number(num).toString().slice(0,3)) + "K"
       : Math.abs(Number(num));
   }

  render(){
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    headerListenerStyle,
    imageStyle
  } = styles
  return(
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text
            style={headerTextStyle}
            onPress={() => Linking.openURL(this.props.artist.url)}>
            {this.props.artist.name}
          </Text>
          <Text style={headerListenerStyle}>
            {this.numberFormat(this.props.artist.listeners)} Listeners
          </Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{uri: this.props.artist.image[2]['#text']}}
         />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(this.props.artist.url)}>
          View Artist
        </Button>
      </CardSection>
    </Card>
  )
  }
}

const styles = {
  headerContentStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexGrow: 1,
  },
  headerTextStyle: {
    fontSize: 18
  },
  headerListenerStyle: {
    fontSize: 12,
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
