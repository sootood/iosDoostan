import * as type from './types'

export const phoneNumberChange = text => ({
    type: type.PHONE_NUMBER_CHANGE,
    payload: text
  });