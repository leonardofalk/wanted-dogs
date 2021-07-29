import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { TopNavBar } from './components'
import { AppProvider, ReduxProvider, GraphQLProvider } from './providers'

function App() {
  return (
    <ReduxProvider>
      <GraphQLProvider>
        <BrowserRouter>
          <TopNavBar />
          <AppProvider />
        </BrowserRouter>
      </GraphQLProvider>
    </ReduxProvider>
  );
}

export default App;
