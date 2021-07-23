import React from 'react'
import { useHistory } from "react-router-dom";

import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Save from '@material-ui/icons/Save'

import { useDogs } from '../../hooks'

import { HomeButton } from '../../components'

import './index.css'

export const New = () => {
  const { add } = useDogs()
  const history = useHistory()

  const [form, setForm] = React.useState({
    title: '',
    reward: '',
    image: '',
  })

  const setFormValue = (key) => (event) => setForm({ ...form, [key]: event?.target?.value })

  return (
    <>
      <HomeButton />
      <form noValidate autoComplete="off">
        <FormGroup>
          <TextField value={form.title} onChange={setFormValue('title')} id="title" label="Nome" variant="outlined" />

          <TextField value={form.image} onChange={setFormValue('image')} id="image" label="Imagem" variant="outlined" />

          <TextField value={form.reward} onChange={setFormValue('reward')} id="reward" label="Recompensa" variant="outlined" />
        </FormGroup>

        <Button size="large" endIcon={<Save />} onClick={() => {
          add(form)
          history.push('/dogs')
        }}>
          Adicionar
        </Button>
      </form>
    </>
  )
}
