import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Container from '@material-ui/core/Container'

import { TopNavBar } from './components'
import { AppProvider } from './providers'

function App() {
  return (
    <BrowserRouter>
      <TopNavBar />
      <Container style={{ marginTop: 85 }} />
      <AppProvider />
    </BrowserRouter>
  );
}

export default App;
