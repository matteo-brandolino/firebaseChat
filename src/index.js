import React from 'react'
import{ GlobalProvider } from './contextAPI/GlobalState';
import Navigation from './Navigator/Navigation'

export default function App () {
  
  return (
    <GlobalProvider>
      <Navigation />
    </GlobalProvider>
  )
}
