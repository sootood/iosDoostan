import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
  FlatList,
  
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import {connect} from 'react-redux';
import { goToAuth } from './navigation'
import {Navigation} from 'react-native-navigation';

import { USER_KEY , FIREBASE} from './config';
import { Product } from "./component/index";
import {getAllProduct} from './actions/index'

let token= null;
 class Home extends React.Component {
   state={isModalVisible:false}
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home'
        },
      }
    };
  }
  async componentDidMount(){
    try {
       token = await AsyncStorage.getItem(FIREBASE)
      console.log('token: ', token)
      if (token) {
      } else {
      }
    } catch (err) {
      console.log('error: ', err)
    }
    this.props.getAllProduct('','','',token)
  }
  onProductPress(){
      this.setState({isModalVisible:!this.state.isModalVisible});
  }
  logout = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY)
      goToAuth()
    } catch (err) {
      console.log('error signing out...: ', err)
    }
  }
  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Hello from Home screen.</Text>
        <Button
          onPress={this.logout}
          title="Sign Out"
        />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'Screen2',
              }
            });
          }}
          title="View next screen"
        /> 
        */}

<SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={'search'}
        platform='ios'
      />
    <FlatList
          data={[{
            "name": "Proxima Midnight",
            "email": "proxima@appdividend.com"
        },
        {
            "name": "Ebony Maw",
            "email": "ebony@appdividend.com"
        }]}
          renderItem={({item}) => <View style={{alignItems:'center', padding:2}}>
          <Product onProductPress={this.onProductPress.bind(this)} isModalVisible={this.state.isModalVisible} info= {item}/>
          </View>}
          keyExtractor={item => item.email}
        />  
      </View>
    )
  }
}
const mapStatetoProps = state => ({
  products: state.ProuductRe.products,


});
export default connect(mapStatetoProps,{getAllProduct})(Home);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})