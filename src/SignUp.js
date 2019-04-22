import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Image,
  AsyncStorage
} from 'react-native'
import { connect } from 'react-redux';
import  {phoneNumberChange,createAgant,verifyCode}  from './actions';
import {FIREBASE,USER_KEY} from './config';
import {
  goMainPage
} from './navigation'
import firebase from 'react-native-firebase';


let token=null;
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

    if (this.props.succedSignUp) {
      console.log('succed login');
      await AsyncStorage.setItem(USER_KEY, 'userishere')
    }
  }
  onChangeText = (key, val) => {
    console.log(val);
    this.props.phoneNumberChange(val);
  }

  onVerifyCodeTextChange = (val) => {
    console.log(val);
    this.props.verifyCode(val);
  }
  signUp() {
  
    if(this.props.succedSignUp && this.props.inputVC!== '')
    {   
      if (this.props.inputVC === this.props.verifyCodeText) {
        goMainPage()
      }else{
        console.log('invalid code');
        
      }
    }
    else
  { this.props.createAgant('','','',this.props.phoneNumber,'','','','','',0,'','',token)}
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
          style={[styles.input,{opacity: this.props.verifyCodeText==='' ? 1 : 0}]}
          placeholder='Phone Number'
          autoCapitalize="none"
          textContentType="telephoneNumber"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        /> 
        <TextInput
          style={[styles.input,{opacity: this.props.verifyCodeText==='' ? 0 : 1}]}
          placeholder='کد تاییدیه '
          autoCapitalize="none"
          textContentType="telephoneNumber"
          placeholderTextColor='white'
          onChangeText={val => this.onVerifyCodeTextChange(val)}
        />
        <Button
          title='ارسال'
          onPress={this.signUp.bind(this)}
        />
      </View>
    )
  }
}
const mapStatetoProps = state => ({
  phoneNumber: state.auth.phoneNumber,
  succedSignUp: state.auth.succed,
  verifyCodeText: state.auth.verifyCode,
  inputVC: state.auth.inputVerfyCode

});
export default connect(mapStatetoProps, { phoneNumberChange ,createAgant,verifyCode})(SignUp);

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
