import React from 'react'
import { Text, View, TextInput } from 'react-native'


// const Header = (props) => {
class Header extends React.Component {
  state = {
    text: '',
  }

  render(){
    // const { textStyle, viewStyle, searchStyle } = styles
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Albums{this.props.headerText}</Text>
        <TextInput
          style={styles.searchStyle}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    )
  }
}

export default Header

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20
  },
  searchStyle: {
    height: 40,
    width: 100,
    backgroundColor: 'white'
    // borderColor: 'white',
    // borderWidth: 10
  }
}
