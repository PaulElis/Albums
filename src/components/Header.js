import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { Form, Item, Input, Icon } from 'native-base';


// const Header = (props) => {
class Header extends React.Component {
  state = {
    text: '',
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render(){
    // const { textStyle, viewStyle, searchStyle } = styles
    console.log(this.state)
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Albums{this.props.headerText}</Text>
        <Form>
          <Item rounded style={styles.searchStyle}>
            <Icon active name='search' />
            <Input onChange={this.handleChange} value={this.state.text} placeholder='Search'/>
          </Item>
        </Form>
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
    height: 25,
    width: 150,
    backgroundColor: 'white'
    // borderColor: 'white',
    // borderWidth: 10
  }
}
