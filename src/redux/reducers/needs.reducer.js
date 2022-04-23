import { needsConstants } from '../constants'
import { success, failure } from '../../utilities'

const initialState = {
  isRequesting: false,
  list: [],
  categoriesList: [],
}

const needsReducer = (state = initialState, action) => {
  switch (action.type) {
    case needsConstants.GET_NEEDS:
      return { ...state, isRequesting: true }
    case success(needsConstants.GET_NEEDS): {
      const { data } = action.payload?.data?.result?.needs
      if (!data.data || !data.data?.length)
        return { ...state, list: [], isRequesting: false }

      const list = data.data.map(item => ({
        ...item,
        images: item.images.map(image => ({
          ...image,
          image_path: `${action.payload?.data?.result.base_path}/${image.image_path}`,
        })),
      }))
      return { ...state, list, isRequesting: false }
    }
    case failure(needsConstants.GET_NEEDS): {
      return { ...state, isRequesting: false }
    }

    case needsConstants.POST_NEEDS:
      return { ...state, isRequesting: true }
    case success(needsConstants.POST_NEEDS):
    case failure(needsConstants.POST_NEEDS):
      return { ...state, isRequesting: false }

    case needsConstants.GET_CATEGORIES: {
      return { ...state, isRequesting: true }
    }
    case success(needsConstants.GET_CATEGORIES): {
      const { data = [] } = action.payload?.data?.result?.categories
      return { ...state, categoriesList: data, isRequesting: false }
    }
    case failure(needsConstants.GET_CATEGORIES):
      return { ...state, isRequesting: false }
    case needsConstants.SHOW_LOADER:
      return { ...state, isRequesting: true }

    default:
      return state
  }
}
export default needsReducer
