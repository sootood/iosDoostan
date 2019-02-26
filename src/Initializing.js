import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Image
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducer';

import {
  goToAuth,
  goHome,
  goSignUp,
  goMainPage
} from './navigation'

import {
  USER_KEY
} from './config'


export default class Initialising extends React.Component {
  async componentDidMount() {
    try {
      const user = await AsyncStorage.getItem(USER_KEY)
      console.log('user: ', user)
      if (!user) {
        goMainPage()
      } else {
        goSignUp()
      }
    } catch (err) {
      console.log('error: ', err)
      goToAuth()
    }
  }
  

  render() {
    return ( 
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
    <View style = {styles.container} >
    <Animatable.Image
          animation="fadeInUpBig"
          style={{width:'50%', height:'30%', resizeMode:'contain'}}
          source={require('./image/circlelogo.png')}
        />
      <Text style = {
        styles.welcome
      } > Loading </Text>
       </View>
       </Provider>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})