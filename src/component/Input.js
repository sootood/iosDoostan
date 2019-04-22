  import React from 'react';
  import { View, TouchableHighlight ,TextInput, Text} from 'react-native';
  import {Card} from './index'

  const Input = (Props) => {
    const { viewStyle ,inputStyle} = styles;
    return (
      <View style={viewStyle}>
        <View style={{flexDirection:'column', backgroundColor:'transparent'}}>
        <Text style={{width:'100%', backgroundColor:'transparent',paddingBottom:7, paddingTop:5}}>
                      {Props.titleSearch}
                  </Text>
          <View style={{flexDirection:'row', backgroundColor:'transparent'}}>

          <TextInput 
            style={inputStyle}
            underlineColorAndroid = "transparent"
            placeholder = {Props.placeholder}
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            />    
            <TouchableHighlight style={{alignSelf:'center', width:'20%', height:'100%'}}onPress={Props.onPress}>
              <View style={{backgroundColor:'green', alignItems:'center', flex:1}}>
                      <Text style={{backgroundColor:'pink',color:'white', textAlign:'center',alignContent:'center', alignVertical:'center'}}>
                          جستجو
                      </Text>
              </View>
          </TouchableHighlight>  
          </View>
          </View>
      </View>
    );
  };

  const styles = {
    viewStyle: {
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#00b894',
      padding: 10,
      margin: 10
    },
    inputStyle: {
      width: '80%' ,
      borderColor:'green',
      borderWidth:1,
      borderRadius: 0.2
    }

  };
  export { Input };
