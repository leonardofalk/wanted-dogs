import React from 'react'
import { useHistory } from "react-router-dom"
import { gql, useMutation } from '@apollo/client'

import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Save from '@material-ui/icons/Save'

import { HomeButton } from '../../components'

import './index.css'

const ADD_DOG = gql`
  mutation addDog($name: String!, $reward: Float!, $image: String!) {
    createDog(name: $name, reward: $reward, image: $image) {
      id
      name
      reward
      image
    }
  }
`

export const New = () => {
  const history = useHistory()
  const [createDog] = useMutation(ADD_DOG, { refetchQueries: ['getDogs'] })

  const [form, setForm] = React.useState({
    name: '',
    reward: '',
    image: '',
  })

  const setFormValue = (key) => (event) => setForm({ ...form, [key]: event?.target?.value })

  return (
    <>
      <HomeButton />
      <form noValidate autoComplete="off">
        <FormGroup>
          <TextField value={form.name} onChange={setFormValue('name')} label="Nome" variant="outlined" />

          <TextField value={form.image} onChange={setFormValue('image')} label="Imagem" variant="outlined" />

          <TextField value={form.reward} onChange={setFormValue('reward')} label="Recompensa" variant="outlined" />
        </FormGroup>

        <Button size="large" endIcon={<Save />} onClick={() => {
          createDog({ variables: {
            ...form,
            reward: Number(form.reward)
           } })
            .then(() => history.push('/dogs'))
        }}>
          Adicionar
        </Button>
      </form>
    </>
  )
}
