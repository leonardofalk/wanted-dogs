import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import AddCircle from '@material-ui/icons/AddCircle'

export const NewButton = () => (
  <Button component={Link} to="/dogs/new" startIcon={<AddCircle />} color="secondary">
    Adicionar
  </Button>
);
