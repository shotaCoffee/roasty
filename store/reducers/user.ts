const initialState = {}
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export default authReducer
