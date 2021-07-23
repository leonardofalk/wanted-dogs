import React from 'react'

import { DogsContext } from '../../contexts'

export const DogsProvider = ({ children }) => {
  const [dogs, setDogs] = React.useState([
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
  ])

  const add = newDog => setDogs([...dogs, newDog])

  return (
    <DogsContext.Provider value={{ dogs, add }}>
      {children}
    </DogsContext.Provider>
  )
}
