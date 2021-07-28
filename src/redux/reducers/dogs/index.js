import { ADD_DOG } from '../../types/dogs'

export const initialState = {
  dogs: [
    {
      title: 'Snow White',
      image: 'https://placedog.net/500/500?id=152',
      reward: 1000000,
    },

    {
      title: 'Billy The Doggo',
      image: 'https://placedog.net/500/500',
      reward: 1250000,
    },

    {
      title: 'The Doglaw Twins',
      image: 'https://placedog.net/500/500?id=2',
      reward: 500000,
    },

    {
      title: 'Mr. Dutch',
      image: 'https://placedog.net/500/500?id=174',
      reward: 250000000,
    }
  ],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOG:
      return { ...state, dogs: [...state.dogs, action.dog] }
    default:
      return state
  }
}
