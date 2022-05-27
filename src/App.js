import React from 'react'
import { Switch, useLocation, Route } from 'react-router-dom'
// import { useDispatch } from 'react-redux'

// components
import HomePage from './components/pages/HomePage'
import GameDetail from './components/Games/GameDetail'
import Header from './components/Header/Header'
import Library from './components/pages/Library'

// auth routes
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

// styling
import GlobalStyles from './components/GlobalStyles'

function App () {
  const location = useLocation()
  const background = location.state && location.state.background
  const [user, setUser] = React.useState(null)

  return (
    <div className='App'>
      <GlobalStyles />
      <Header user={user}/>
      <Switch location={background || location}>
        <Route exact path={['/game/:id', '/']}>
          <HomePage setUser={setUser} user={user}/>
        </Route>
        <Route path='/sign-up' component={SignUp} exact />
        <Route path='/sign-in' exact >
          <SignIn setUser={setUser} user={user} />
        </Route>
        <AuthenticatedRoute
          user={user}
          path='/sign-out'
          render={() => <SignOut user={user} setUser={setUser}/>}
        />
        <AuthenticatedRoute
          setUser={setUser}
          user={user}
          path='/change-password'
          render={() => <ChangePassword user={user} />}
        />
        <AuthenticatedRoute
          user={user}
          path='/library'
          render={() => <Library user={user} />}
        />
      </Switch>
      <Route path='/game/:id' component={GameDetail} exact />
    </div>
  )
}

export default App
