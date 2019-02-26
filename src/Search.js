import React from 'react';
import { View , Text,TouchableHighlight,Image,StyleSheet} from 'react-native';
import {Card, ExpamdedList} from './component';

const arrayCarType=[];
class Search extends React.Component{
    static get options() {
        return {
          topBar: {
            title: {
              text: 'Search'
            },
          }
        };
      }
    state={arrayCarType:''}
render(){
    return( 
    <View>
        <Card title='search'>
            <Text>جستجوی پیشرفته</Text>
            <ExpamdedList 
            title={'نوع ماشین را انتخاب کنید'}
            defaultValue={'نوع ماشین'}
            options={this.state.arrayCarType}
            ></ExpamdedList>

            <ExpamdedList 
            title={'نوع  کالا را انتخاب کنید'}
            defaultValue={'نوع کالا'}
            options={this.state.arrayCarType}
            ></ExpamdedList>

            <ExpamdedList 
            title={'سال خودرو را انتخاب کنید'}
            defaultValue={'سال خودرو'}
            options={this.state.arrayCarType}
            ></ExpamdedList>

        </Card>

        <View style={styles.btnSearch}>
            <TouchableHighlight>
                <View style={{flexDirection:'row'}}>
                <Text>
                    جستجو
                </Text>
                <Image src={require('./image/loupe.png')}/>
                </View>
            </TouchableHighlight>
        </View>
    </View>
        );
}
}

export default Search;

const styles=StyleSheet.create({
  
    btnSearch:{
        alignContent:'center',
        width: '40%',
        borderRadius: 15,
        alignSelf: 'center',
        backgroundColor:'blue'
    }
    })