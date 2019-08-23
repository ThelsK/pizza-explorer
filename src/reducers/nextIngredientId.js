const initialState = 7

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'INCREASE_INGREDIENT_ID':
      return state + action.payload
    default:
      return state
  }
}

export default reducer