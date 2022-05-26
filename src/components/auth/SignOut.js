import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../../api/auth'
// import { signOutSuccess } from '../AutoDismissAlert/messages'
class SignOut extends Component {
  componentDidMount () {
    const { history, user } = this.props
    signOut(user)
    // .finally(() =>
    //   msgAlert({
    //     heading: 'Signed Out Successfully',
    //     message: signOutSuccess,
    //     variant: 'success'
    //   })
    // )
      .catch((err) => console.error(err))
      .finally(() => history.push('/'))
      // .finally(() => this.setState({ user: null }))
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)
