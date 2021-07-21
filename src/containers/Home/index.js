import React from 'react'
import Grid from '@material-ui/core/Grid';
import { WantedCard, NewButton } from '../../components'

const dogs = [
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
]

export const Home = () => (
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
