import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useSelector } from 'react-redux'

import { WantedCard, NewButton } from '../../components'

export const Home = () => {
  const dogs = useSelector(state => state.dogsReducer.dogs)

  return (
    <>
      <NewButton />
      <Grid container spacing={4}>
        {dogs.map((dog, key) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
            <WantedCard {...dog} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
