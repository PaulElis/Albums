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
    // console.log('Header line 17 in updateText', query)
    this.props.runSearch(query)
  }

  render(){
    console.log('header props', this.props)
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Albums{this.props.headerText}</Text>
        <Form>
          <Item rounded style={styles.searchStyle}>
            <Icon active name='search' />
            <Input
              onSubmitEditing={(event) => this.search(event.nativeEvent.text)}
              onChangeText={(query) => this.setState({query})}
              value={this.state.query}
              returnKeyType="search"
              placeholder='Search'/>
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

// export default Header
export default connect(mapStateToProps, {runSearch})(Header)


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
  }
}
