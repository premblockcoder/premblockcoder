/**
 *  Import action creator constants & dependencies
 */
import { userConstants } from '../constants'
import { API_URLS } from '../../configs/url'

export const beginLoginUser = data => ({
  type: userConstants.LOGIN,
  payload: {
    request: {
      url: API_URLS.LOGIN,
      method: 'post',
      data,
    },
  },
})

export const beginSignupUser = data => ({
  type: userConstants.SIGN_UP,
  payload: {
    request: {
      url: API_URLS.SIGN_UP,
      method: 'post',
      data,
    },
  },
})

export const beginUpdateUser = data => ({
  type: userConstants.UPDATE_USER,
  payload: {
    request: {
      url: API_URLS.UPDATE_PROFILE,
      method: 'post',
      data,
    },
  },
})

export const beginChangePassword = data => ({
  type: userConstants.CHANGE_PASSWORD,
  payload: {
    request: {
      url: API_URLS.CHANGE_PASSWORD,
      method: 'post',
      data,
    },
  },
})

export const showLoader = data => ({
  type: userConstants.SHOW_LOADER,
})

export const setToken = data => ({
  type: userConstants.SET_TOKEN,
  payload: {
    request: {
      url: API_URLS.FCM_SUBSCRIBE,
      method: 'post',
      data,
    },
  },
})

export function loginUser(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginLoginUser(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

export function registerUser(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginSignupUser(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

export function updateUser(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginUpdateUser(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}

export function changePassword(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginChangePassword(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      throw error.response
    }
  }
}
