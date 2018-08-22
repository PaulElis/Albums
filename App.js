import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'
import { connect } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './src/reducers/reducers'
import { Provider } from 'react-redux'
// import {BrowserRouter as Router} from 'react-router-dom'

// class App extends React.Component {
export default class App extends React.Component {


  render() {
    const store = createStore(reducer, applyMiddleware(thunk))
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
            <Header />
            <AlbumList />
        </View>
      </Provider>
    );
  }
}

// export default connect()(App)
