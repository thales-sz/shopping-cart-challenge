import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Provider from './context/Provider.tsx'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './api/queryClient.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
