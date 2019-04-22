import React from 'react';
import { View , Text,TouchableHighlight,Image,StyleSheet} from 'react-native';
import {Card, ExpamdedList,Input} from './component';

const arrayCarType=[];
class CreateAgancy extends React.Component{
    static get options() {
        return {
          topBar: {
            title: {
              text: 'Agancy'
            },
          }

        };
      }
    state={arrayCarType:''}

    searchByWord(){
        console.log('search');
        
    }
    searchByCode(){
        console.log('search');
    }
render(){
    return( 
    <View style={{flex:1 , paddingTop:40}}>
        <Card title='search'>
            <ExpamdedList 
            defaultValue={'نام  '}
            options={this.state.arrayCarType}
            onSelect={(idx, value) => console.log(idx)}
            ></ExpamdedList>

            <ExpamdedList 
            defaultValue={'نام خانوادگی'}
            options={this.state.arrayCarType}
            ></ExpamdedList>

            <ExpamdedList 
            defaultValue={'سال خودرو'}
            options={this.state.arrayCarType}
            ></ExpamdedList>

        </Card>

        <View style={styles.btnSearch}>
            <TouchableHighlight>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.textStyle}>
                    ارسال
                </Text>
                </View>
            </TouchableHighlight>
        </View>
    </View>
        );
}
}

export default CreateAgancy;

const styles=StyleSheet.create({
  
    btnSearch:{
        alignContent:'center',
        width: '40%',
        height:'8%',
        borderRadius: 15,
        alignSelf: 'center',
        backgroundColor:'green',
        alignItems:'center'
    },
    textStyle:{color:'white', textAlign:'center', textAlignVertical:'center'}
    })