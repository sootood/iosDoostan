import React from 'react'
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
} from 'react-native'
import {Navigation} from 'react-native-navigation';

export default class Screen2 extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Screen 2'
        },
      }
    };
  }
  render() {
    return (
      <View style={styles.container}>
       <View style={{height: '35%', backgroundColor: 'blue', alignItems: 'center'}}>
        <Image style={{width:200 , height:200}}
        source={require('./image/circlelogo.png')}></Image>
       </View>
       <View style={{flexDirection:'row', alignItems: 'center', padding:10, direction:'rtl'}}>
         <Image style={{width:20 , height:20}}
        source={require('./image/circlelogo.png')}></Image>
        <Text style={{padding:5}}>kfjfkg</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor:'white'
  }
})