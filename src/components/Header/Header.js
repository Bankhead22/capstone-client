import React, { Fragment } from 'react'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

// components
import SearchBar from './SearchBar'

import styled from 'styled-components'
import { motion } from 'framer-motion'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
    <NavLink to='/library' className='nav-link'>My Library</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (

  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>

)

const alwaysOptions = (
  <Fragment>
    {/* <NavLink exact to='/' className='nav-link'>Home</NavLink> */}
  </Fragment>
)

const Header = ({ user }) => (
  <StyledNav initial='hidden' animate='show'>
    <SearchBar />
    <Link className='logo-container' to='/'></Link>
    {user && (
      <p className='navbar-text mr-2'>Welcome, {user.email}</p>
    )}
    {alwaysOptions}
    {user ? authenticatedOptions : unauthenticatedOptions}
  </StyledNav>
)

// Styling
const StyledNav = styled(motion.nav)`
  padding: 2rem 2rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  a {
    color: #fff;
  }
  a:hover {
    color: #a3a3a3;
  }
  .nav-links {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
  .nav-links > a {
    padding: 1rem 1rem;
  }
  form {
    flex: 5;
  }
  span {
    color: #ff0000;
    cursor: pointer;
  }
  input {
    width: 80%;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 1.5rem;
  }
  button {
    font-size: 1.2rem;
    border: none;
    padding: 0.5rem 0.7rem;
    margin-left: 1rem;
    margin-top: 1rem;
    border-radius: 50%;
    cursor: pointer;
    background: #ff5e00;
    color: white;
  }

  .logo-container {
    flex: 1;
  }
  @media screen and (min-width: 319px) {
    flex-direction: column;
    .nav-links {
      margin-top: 1.5rem;
    }
  }

  @media screen and (min-width: 830px) {
    flex-direction: row;
    form {
      flex: 3;
    }
    input {
      width: 70%;
    }
  }
  @media screen and (min-width: 1024px) {
    input {
      width: 50%;
    }
  }
`

export default Header
