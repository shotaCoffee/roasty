const initialState = null
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        user: action.user
      }
    default:
      return state
  }
}

export default authReducer
