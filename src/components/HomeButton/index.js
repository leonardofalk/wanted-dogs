import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import ArrowBack from '@material-ui/icons/ArrowBack'

export const HomeButton = () => (
  <Button component={Link} to="/dogs" startIcon={<ArrowBack />} color="secondary">
    Voltar
  </Button>
);
