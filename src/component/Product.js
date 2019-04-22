import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,TouchableWithoutFeedback,TextInput} from 'react-native';
import Modal from "react-native-modal";
import Svg, {
  Use,
   Image as ImageSvg ,
} from 'react-native-svg';
import {TextTable} from './index'

const  Product = (Props) => {
    return(
    <View style={{flexDirection:'column', width: '95%', backgroundColor:'yellow'}}>
    <Modal isVisible={Props.isModalVisible}>
          <View style={{ width:'80%',height:200, backgroundColor:'white', alignSelf:'center' , borderRadius: 0.5, borderWidth:1}}>
          <View style={{width:'100%', height:50, allignContent:'center' , backgroundColor: 'blue',  alignContent:'center'}}>
            <Text style={{color: 'white', alignSelf:'center'}}>تعداد کالای مورد نظر را وارد کنید</Text>
          </View>
          <View style={{  alignSelf:'center', flexDirection:'row' }}>
          <Svg width="15%" height="100%" alignSelf="center" viewBox="0 0 120 120" >
            <ImageSvg href={require('../image/add.png')} />
          </Svg>
          
          <TextInput 
            style={styles.inputStyle}
            underlineColorAndroid = "transparent"
            placeholder = {'dfksdnf'}
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            /> 
             <Svg width="15%" height="100%" alignSelf="center" viewBox="0 0 120 120" >
            <ImageSvg href={require('../image/minus.png')} />
          </Svg>
          </View>
            <TouchableOpacity style={{width:'80%', alignContent: 'center', backgroundColor:'blue',
             borderRadius: 2, borderWidth:1 ,borderColor: 'blue', alignSelf:'center'}}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    <TouchableWithoutFeedback onPress={() => Props.onProductPress()}>
    <View>
        <Text style={styles.textStyle}>dddd</Text>
        <Image style={{width: 200, height:200}}
            source={require('../image/circlelogo.png')}
            
            />
        <View style={{flexDirection:'row',flex:1,  backgroundColor:'red',justifyContent: 'space-around'}}>
        <TextTable title={'نوع ماشین'} value={'ggg'}/>
        <TextTable title={'گروه کالا:'} value={'ggg'}/>
        <TextTable title={'تعداد در جعبه:'} value={'ggg'}/>
        </View>
        <Text style={{backgroundColor:'red', position:'absolute',
        transform: [{ rotate: '45deg'}],
        right: 10 , top: 5}}>kgjg</Text>
        </View>
        </TouchableWithoutFeedback>
    </View>
    );


}
export  {Product};
const styles = StyleSheet.create({
    textStyle: {
        color:'black', textAlign:'center', textAlignVertical:'center'
        , width:'100%'
    },
    inputStyle: {
      width: '50%' ,
      height:'100%',
      alignSelf:'center',
      borderColor:'green',
      borderWidth:1,
      borderRadius: 0.2
    }
  })