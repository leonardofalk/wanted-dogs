import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { TopNavBar } from './components'
import { AppProvider, ReduxProvider } from './providers'

function App() {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <TopNavBar />
        <AppProvider />
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
