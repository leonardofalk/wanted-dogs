import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import { WantedCard, TopNavBar } from './components'

const dogs = [
  {
    id: 1,
    title: 'Snow White',
    image: 'https://placedog.net/500/500?id=152',
    reward: 1000000,
    description: '',
  },

  {
    id: 2,
    title: 'Billy The Doggo',
    image: 'https://placedog.net/500/500',
    reward: 1250000,
    description: '',
  },

  {
    id: 3,
    title: 'The Doglaw Twins',
    image: 'https://placedog.net/500/500?id=2',
    reward: 500000,
    description: '',
  },

  {
    id: 4,
    title: 'Mr. Dutch',
    image: 'https://placedog.net/500/500?id=174',
    reward: 250000000,
    description: '',
  }
]

function App() {
  return (
    <>
      <TopNavBar />
      <Container style={{ marginTop: 85 }} />
        <Grid container spacing={4}>
          {dogs.map((dog, key) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
              <WantedCard {...dog} />
            </Grid>
          ))}
        </Grid>
    </>
  );
}

export default App;
