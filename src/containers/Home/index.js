import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress';

import { WantedCard, NewButton } from '../../components'
import { fillDogsRequest } from '../../redux/actions/dogs'

export const Home = () => {
  const dispatch = useDispatch()
  const { dogs, loading, called } = useSelector(state => state.dogsReducer)

  React.useEffect(() => {
    if (!called) {
      dispatch(fillDogsRequest())
    }
  }, [dispatch, called])

  return (
    <>
      <NewButton />
      {loading && <LinearProgress />}
      {!loading && (
        <Grid container spacing={4}>
          {dogs.map((dog, key) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
              <WantedCard {...dog} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}
