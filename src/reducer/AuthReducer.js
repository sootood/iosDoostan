import {
    PHONE_NUMBER_CHANGE,
    SEND_PHONE_NUMBER_FAILD,
    SEND_PHONE_NUMBER_SUCCEED,
    VERIFY_CODE
  } from '../actions/types';
  
  const INITIOAL_STATE = { phoneNumber: '',  error: '', succed: false , verifyCode:'',inputVerfyCode:''};
  export default (state = INITIOAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
      case PHONE_NUMBER_CHANGE:
        return { ...state, phoneNumber: action.payload };
      case SEND_PHONE_NUMBER_SUCCEED:
        return { ...state, verifyCode: action.payload.data.message , succed:true };
      case SEND_PHONE_NUMBER_FAILD:
        return { ...state, error: action.payload };
        case VERIFY_CODE:
        return { ...state, inputVerfyCode: action.payload };
      default:
        return state;
    }
  };
  