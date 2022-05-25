import React from 'react'
import GlobalStyles from './components/GlobalStyles'
import HomePage from './components/pages/HomePage'
import { Switch, useLocation, Route } from 'react-router-dom'
import GameDetail from './components/Games/GameDetail'
import Header from './components/Header/Header'

import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

function App () {
  const location = useLocation()
  const background = location.state && location.state.background

  return (
    <div className='App'>
      <GlobalStyles />
      <Header />
      <Switch location={background || location}>
        <Route exact path={['/game/:id', '/']}>
          <HomePage />
        </Route>
        <Route path='/sign-up' component={SignUp} exact />
        <Route path='/sign-in' component={SignIn} exact />
      </Switch>
      <Route path='/game/:id' component={GameDetail} exact />
    </div>
  )
}

export default App
