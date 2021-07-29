import React from 'react'
import { useQuery, gql } from '@apollo/client'

import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress';

import { WantedCard, NewButton } from '../../components'

const GET_DOGS = gql`
  query getDogs {
    dogs {
      id
      name
      image
      reward
    }
  }
`;

export const Home = () => {
  const { data, loading } = useQuery(GET_DOGS)

  return (
    <>
      <NewButton />
      {loading && <LinearProgress />}
      {!loading && (
        <Grid container spacing={4}>
          {data.dogs.map((dog, key) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
              <WantedCard {...dog} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}
