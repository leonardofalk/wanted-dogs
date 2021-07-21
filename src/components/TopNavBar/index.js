import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export const TopNavBar = () => (
  <AppBar position="absolute" color="transparent">
    <Toolbar style={{ justifyContent: 'center'}}>
      <Typography variant="h6">
        Wanted Dogs!
      </Typography>
    </Toolbar>
  </AppBar>
)
