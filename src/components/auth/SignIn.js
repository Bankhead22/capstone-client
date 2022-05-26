import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import { v4 as uuid } from 'uuid'

import { signIn } from '../../api/auth'
// import { signInSuccess } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  setUser = (user) => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  // deleteAlert = (id) => {
  //   this.setState((state) => {
  //     return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
  //   })
  // }

  // msgAlert = ({ heading, message, variant }) => {
  //   const id = uuid()
  //   this.setState((state) => {
  //     return {
  //       msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
  //     }
  //   })
  // }

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

onSignIn = (event) => {
  event.preventDefault()

  const { history, setUser } = this.props

  signIn(this.state)
    .then((res) => setUser(res.data.user))
    // .then(() =>
    //   msgAlert({
    //     heading: 'Sign In Success',
    //     message: signInSuccess,
    //     variant: 'success'
    //   })
    // )
    .then(() => history.push('/'))
    .catch((error) => {
      this.setState({ email: '', password: '' })
      console.error(error)
      // msgAlert({
      //   heading: 'Sign In Failed with error: ' + error.message,
      //   message: signInFailure,
      //   variant: 'danger'
      // })
    })
}

render () {
  const { email, password } = this.state

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Sign In</h3>
        <Form onSubmit={this.onSignIn}>
          <Form.Group controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              value={email}
              placeholder='Enter email'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              value={password}
              type='password'
              placeholder='Password'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}
}

export default withRouter(SignIn)
