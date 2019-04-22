import React,{Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';

const  TextTable = (Props) => {

    return(
    <View style={{flexDirection:'column', padding:10}}>
        <Text style={styles.textStyle}>{Props.title}</Text>
        <Text style={styles.textStyle}>{Props.value}</Text>
    </View>
    );


}
export  {TextTable};
const styles = StyleSheet.create({
    textStyle: {
        color:'black', textAlign:'center', textAlignVertical:'center'
    }
  })