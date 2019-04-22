import firebase from 'react-native-firebase'
import React from 'react'
import * as type from './types'
import {AsyncStorage} from 'react-native';
import {FIREBASE} from '../config';
const axios = require('axios');
export const phoneNumberChange = text => ({
    type: type.PHONE_NUMBER_CHANGE,
    payload: text
  });
  export const verifyCode = text => ({
    type: type.VERIFY_CODE,
    payload: text
  });
 
  
  export const createAgant = (FirstName,
    LastName,
    NationalCode,
    Mobile,
    Tel,
    ProvinceId,
    City,
    Address,
    PostCode,
    IsAgency,
    Telegram,
    Bearing,
    FirebaseId) =>{
    return dispatch =>{
      axios.post('http://91.92.190.54:1095/api/friend/CreateAgent',
      {
        FirstName,
        LastName,
        NationalCode,
        Mobile,
        Tel,
        ProvinceId,
        City,
        Address,
        PostCode,
        IsAgency,
        Telegram,
        Bearing,
        FirebaseId
      }
      )
      .then(res => {
          dispatch({
              type: type.SEND_PHONE_NUMBER_SUCCEED,
              payload: res,
          });
      })
      .catch(err => {
        dispatch({
            type: type.SEND_PHONE_NUMBER_FAILD,
            payload: err,
        });
    });
    }
  };

  export const getAllProduct = (carType, category, year,token) => {
    
    console.log(token);
    
    return dispatch => {
        axios.post('http://91.92.190.54:1095/api/friend/GetProductbyType',
        {
          Array: carType,
          ArrayGroup: category,
          ArrayDetailGroup: year,
          FirebaseId:token

        }
        )
        .then(res => {
            dispatch({
                type: type.FETCH_PRODUCT_LIST,
                payload: res,
            });
        })
        .catch(err => {
          dispatch({
              type: type.FAILD_PRODUCT_LIST,
              payload: err,
          });
      });
    }
}

