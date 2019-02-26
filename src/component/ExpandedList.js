import React from 'react';
import { View ,StyleSheet, Text} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const ExpamdedList = (Props) => {

    
        return(
            <View style={styles.view }>
                <Text style={styles.title}>{Props.title}</Text>
                <ModalDropdown 
                style={{padding:5}}
                options={Props.list}
                defaultValue={Props.defaultValue}
                 onSelect={(idx, value) => console.log(idx)}
                />

            </View>
        );
    
}
const styles = StyleSheet.create({
    view:{
    padding: 10,
    backgroundColor: 'white',
    
},
title:{
    color: 'green',
    fontSize: 12,
    padding:2,
    justifyContent: 'flex-end',
}

});
export {ExpamdedList};
