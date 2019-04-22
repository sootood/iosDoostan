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
import firebase from 'react-native-firebase';
import reducers from './reducer';
import {FIREBASE} from './config'

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
      if (user) {
        goMainPage()
      } else {
        const firebaseConfig = {
          apiKey: 'AIzaSyAGrFeYyxpfqRrLOqZN8znHNE4NFaUplck',
          authDomain: 'blah',
          databaseURL: 'https://doostanios.firebaseio.com',
          storageBucket: 'blah',
          messagingSenderId: '887815028443'
        };
        
        firebase.initializeApp(firebaseConfig);
        const fcmToken = await firebase.messaging().getToken(); 
        await AsyncStorage.setItem(FIREBASE, fcmToken)
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