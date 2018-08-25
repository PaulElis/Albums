import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const Button = ({onPress, children}) => {
  const {buttonStyle, textStyle} = styles

  return(
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    // color: '#007aff',
    // color: 'white',
    color: 'red',
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 6,
    paddingBottom: 6
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    // backgroundColor: '#fff',
    // backgroundColor: 'red',
    borderRadius: 5,
    borderWidth: 1,
    // borderColor: '#007aff',
    borderColor: 'black',
    // borderColor: 'black',
  }
}

export default Button
