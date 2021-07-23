import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { TopNavBar } from './components'
import { AppProvider, DogsProvider } from './providers'

function App() {
  return (
    <BrowserRouter>
      <DogsProvider>
        <TopNavBar />
        <AppProvider />
      </DogsProvider>
    </BrowserRouter>
  );
}

export default App;
