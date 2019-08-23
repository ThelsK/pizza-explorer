const initialState = 4

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'INCREASE_PIZZA_ID':
      return state + action.payload
    default:
      return state
  }
}

export default reducer