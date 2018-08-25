import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { Form, Item, Input, Icon } from 'native-base'

import { runSearch } from '../actions/actions'
import { connect } from 'react-redux'


class Header extends React.Component {
  state = {
    query: '',
  }

  search = (query) => {
    this.props.runSearch(query)
  }

  render(){
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>JAM{this.props.headerText}</Text>
        <Form>
          <Item rounded style={styles.searchStyle}>
            <Icon active name='search' />
            <Input
              numberOfLines={1}
              style={styles.inputStyle}
              onSubmitEditing={(event) => this.search(event.nativeEvent.text)}
              onChangeText={(query) => this.setState({query})}
              value={this.state.query}
              returnKeyType="search"
              placeholder='Enter an Artist'/>
          </Item>
        </Form>
      </View>
    )
  }
}

function mapStateToProps(state){
  return {
    query: state.query,
    albums: state.albums
  }
}

export default connect(mapStateToProps, {runSearch})(Header)


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 30,
    letterSpacing: 2,
    color: 'red',
    fontWeight: 'bold'
  },
  searchStyle: {
    height: 30,
    width: 240,
    backgroundColor: 'white'
  },
  inputStyle: {
  }
}
