import { applyMiddleware, } from 'redux'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { createDevTools} from '@redux-devtools/core'
import reducers from '../reducers'

import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import * as RootNavigation from '../../MainNavigator/RootNavigation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

const client = axios.create({
  baseURL: 'http://112.196.76.181:8686/everyday-angel-backend/public/api/v1/',
  headers: {
    accept: 'application/json',
    // 'content-type': 'application/x-www-form-urlencoded',
  },
})

client.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('access_token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

const middlewareConfig = {
  interceptors: {
    request: [
      {
        success({ getState, dispatch, getSourceAction }, req) {
          let request = req
          if (request.method == 'post' || request.method == 'put') {
            request.data = request.data
          }
          return request
        },
      },
    ],
    response: [
      {
        success({ getState, dispatch, getSourceAction }, response) {
          return response
        },
        error({ getState, dispatch, getSourceAction }, error) {
          if (!axios.isCancel(error)) {
            httpHandleError(error.response)
          }

          return Promise.reject(error)
        },
      },
    ],
  },
}

const httpHandleError = error => {
  if (error.status == 401) {
    AsyncStorage.clear()
    RootNavigation.navigate('Login')
  }

  if (error.status == 500) {
    Toast.show({
      type: 'error',
      text1: error.data.message,
    })
  }

  if (error.status == 422) {
    if (error.data && error.data.message) {
      if (typeof error.data.message == 'object') {
        var firstKey = ''
        for (var key in error.data.message) {
          firstKey = key
          break
        }

        if (error.data.message[firstKey]) {
          Toast.show({
            type: 'error',
            text1: 'Validation failed',
            text2: error.data.message[firstKey][0],
            text2NumberOfLines: 2
          })
        } else if (error.data.message[firstKey]) {
          Toast.show({
            type: 'error',
            text1: 'Validation failed',
            text2: error.data.message[firstKey],
            text2NumberOfLines: 2
          })
        }
      } else if (typeof error.data.message == 'string') {
        Toast.show({
          type: 'error',
          text1: 'Validation failed',
          text2: error.data.message,
          text2NumberOfLines: 2
        })
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2NumberOfLines: 2
      })
    }
  }
}

/**
 * Prepare the Redux Store
 */
const composedMiddlewares = applyMiddleware(thunk)

const createStoreWithMiddleware = applyMiddleware(
  axiosMiddleware(client, middlewareConfig),
  thunk,
)(configureStore)

const storeEnhancers = createDevTools({
  name: 'TricePay',
})(composedMiddlewares)

const Store = () => {
  return createStoreWithMiddleware(reducers, undefined,composedMiddlewares)
}

export default Store
