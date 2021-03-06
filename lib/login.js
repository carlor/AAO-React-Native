// @flow
import { AsyncStorage } from 'react-native'
import buildFormData from './formdata'
import Keychain from 'react-native-keychain'
import Frisbee from 'frisbee'

// let financials = 'https://www.stolaf.edu/sis/st-financials.cfm'
// let sis = 'https://www.stolaf.edu/sis/login.cfm'
// let olecard = 'https://www.stolaf.edu/apps/olecard/checkbalance/authenticate.cfm'


export const api = new Frisbee({baseURI: 'https://www.stolaf.edu'})
const SIS_LOGIN_CREDENTIAL_KEY = 'stolaf.edu'

export function saveLoginCredentials(username: string, password: string): Promise<any> {
  return Keychain.setInternetCredentials(SIS_LOGIN_CREDENTIAL_KEY, username, password)
    .catch(() => {})
}

export function loadLoginCredentials(): Promise<{username: string, password: string}> {
  return Keychain.getInternetCredentials(SIS_LOGIN_CREDENTIAL_KEY)
    .catch(() => {})
}

export function clearLoginCredentials(): Promise<any> {
  return Keychain.resetInternetCredentials(SIS_LOGIN_CREDENTIAL_KEY)
    .catch(() => {})
}

export async function isLoggedIn(): Promise<boolean> {
  let result = await AsyncStorage.getItem('credentials:valid')
  return JSON.parse(result)
}

export function checkLogin(username: string, password: string): Promise<boolean> {
  return sisLogin(username, password).then(res => res.result)
}


export async function performLogin(username: string, password: string): Promise<{result: boolean, message?: string}> {
  let {result, message} = await sisLogin(username, password)
  if (!result) {
    await AsyncStorage.setItem('credentials:valid', JSON.stringify(false))
    return {result, message}
  }

  await Promise.all([
    saveLoginCredentials(username, password),
    AsyncStorage.setItem('credentials:valid', JSON.stringify(true)),
  ])

  return {result}
}


export async function sisLogin(username: string, password: string): Promise<{result: boolean, message?: string}> {
  let form = buildFormData({
    login: username,
    passwd: password,
  })
  let loginResult = await api.post('/sis/login.cfm', {body: form})
  if (loginResult.body.includes('Password')) {
    return {result: false, message: ''}
  }
  return {result: true}
}
