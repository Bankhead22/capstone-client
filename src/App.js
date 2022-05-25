import React from 'react'
import { GlobalStyles } from '@mui/material'
import HomePage from './components/pages/HomePage'
// import Header from './components/Header/Header'

function App () {
  return (
    <div className='App'>
      <GlobalStyles />
      {/* <Header /> */}
      <HomePage />
    </div>
  )
}

export default App
