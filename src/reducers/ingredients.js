const initialState = [
  {
    id: 1,
    name: 'tomato'
  },
  {
    id: 2,
    name: 'mozarella'
  },
  {
    id: 3,
    name: 'basil'
  },
  {
    id: 4,
    name: 'olive oil',
  },
  {
    id: 5,
    name: 'salt'
  },
  {
    id: 6,
    name: 'rosemary'
  }
]

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [
        ...state,
        { ...action.payload }
      ]
    default:
      return state
  }
}

export default reducer