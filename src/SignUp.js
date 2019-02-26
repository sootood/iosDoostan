import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Image
} from 'react-native'
import { connect } from 'react-redux';
import  phoneNumberChange  from './actions';

 class SignUp extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'SignUp'
        },
      }
    };
  }
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    console.log(text);
    this.props.phoneNumberChange(val);
  }
  signUp = async () => {
    const {  phone_number } = this.state
    try {
      // here place your signup logic

      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
      <Image
          animation="fadeInUpBig"
          style={{width:'50%', height:'30%', resizeMode:'contain'}}
          source={require('./image/circlelogo.png')}
        />
        {/* <TextInput
          style={styles.input}
          placeholder='09XXXXXXXXX'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        /> */}
        {/* <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        /> */}
        {/* <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />*/}
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          textContentType="telephoneNumber"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        /> 
        <Button
          title='ارسال'
          onPress={this.signUp}
        />
      </View>
    )
  }
}
const mapStatetoProps = state => ({
  phoneNumber: state.auth.phoneNumber,
});
export default connect(mapStatetoProps, { phoneNumberChange })(SignUp);

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    marginTop:50,
    alignItems: 'center'
  }
})
