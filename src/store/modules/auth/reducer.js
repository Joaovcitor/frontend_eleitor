import * as types from "../types"

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      console.log("Oi")
      const newState = { ...state }
      newState.isLoading = true
      newState.token = action.payload.token
      newState.user = action.payload.user
      return newState
    }
    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    default:
      return state
  }
}
