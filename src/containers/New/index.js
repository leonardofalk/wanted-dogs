import React from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addDogRequest } from '../../redux/actions/dogs'

import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Save from '@material-ui/icons/Save'

import { HomeButton } from '../../components'

import './index.css'

export const New = () => {
  const dispatch = useDispatch()
  const history = useHistory()

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
          dispatch(addDogRequest(form))

          history.push('/dogs')
        }}>
          Adicionar
        </Button>
      </form>
    </>
  )
}
