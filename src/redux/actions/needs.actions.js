/**
 *  Import action creator constants & dependencies
 */
import { needsConstants } from '../constants'
import { API_URLS } from '../../configs/url'

export const beginGetNeeds = params => ({
  type: needsConstants.GET_NEEDS,
  payload: {
    request: {
      url: API_URLS.MY_POSTED_NEEDS,
      params,
    },
  },
})

export const getCategories = () => ({
  type: needsConstants.GET_CATEGORIES,
  payload: {
    request: {
      url: API_URLS.CATEGORIES,
    },
  },
})

export const beginPostNeed = data => ({
  type: needsConstants.POST_NEEDS,
  payload: {
    request: {
      url: API_URLS.NEEDS_POST,
      method: 'post',
      data,
    },
  },
})

export function addNeed(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginPostNeed(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      console.log('action failed', error)
      throw error.response
    }
  }
}

export function getNeeds(params) {
  return async dispatch => {
    try {
      const response = await dispatch(beginGetNeeds(params))
      if (response.payload) {
        const { data } = response.payload
        return data
      }

      throw response
    } catch (error) {
      console.log('action failed', error)
      throw error.response
    }
  }
}
