import {
  ADD_DOG_REQUEST,
  ADD_DOG_SUCCESS,
  ADD_DOG_ERROR,
  FILL_DOGS_REQUEST,
  FILL_DOGS_SUCCESS,
  FILL_DOGS_ERROR,
} from "../../types/dogs";

export const initialState = {
  dogs: [],
  loading: false,
  error: null,
  called: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOG_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FILL_DOGS_REQUEST:
      return {
        ...state,
        loading: true,
        called: true
      }
    case ADD_DOG_SUCCESS:
      return {
        ...state,
        dogs: [...state.dogs, action.dog],
        error: null,
        loading: false
      }
    case FILL_DOGS_SUCCESS:
      return {
        ...state,
        dogs: action.dogs,
        error: null,
        loading: false
      }
    case ADD_DOG_ERROR:
    case FILL_DOGS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}
