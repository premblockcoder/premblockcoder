import { userConstants } from '../constants'
import { success, failure } from '../../utilities'

const initialState = {
  isRequesting: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN:
      return { ...state, isRequesting: true }
    case success(userConstants.LOGIN):
    case failure(userConstants.LOGIN):
      return { ...state, isRequesting: false }

    case userConstants.SIGN_UP:
      return { ...state, isRequesting: true }
    case success(userConstants.SIGN_UP):
    case failure(userConstants.SIGN_UP):
      return { ...state, isRequesting: false }

    case userConstants.CHANGE_PASSWORD:
      return { ...state, isRequesting: true }
    case success(userConstants.CHANGE_PASSWORD):
    case failure(userConstants.CHANGE_PASSWORD):
      return { ...state, isRequesting: false }

    case userConstants.UPDATE_USER:
      return { ...state, isRequesting: true }
    case success(userConstants.UPDATE_USER):
    case failure(userConstants.UPDATE_USER):
      return { ...state, isRequesting: false }

    case userConstants.SHOW_LOADER:
      return { ...state, isRequesting: true }
    default:
      return state
  }
}
export default usersReducer
