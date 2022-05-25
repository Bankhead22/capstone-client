import React, { useState } from 'react'
// styles
import styled from 'styled-components'
import { motion } from 'framer-motion'
// import { fadeIn } from './../animations'
import { FaSearch } from 'react-icons/fa'
import { SiNintendogamecube } from 'react-icons/si'

// redux and routes
import { fetchSearch } from '../../actions/gameActions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
// import { Link } from 'react-router-dom'

const SearchBar = () => {
  const [textInput, setTextInput] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const inputHandler = (e) => {
    setTextInput(e.target.value)
  }

  const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(textInput))
    setTextInput('')
  }

  const clearSearchedData = () => {
    dispatch({ type: 'CLEAR_SEARCHED' })
    history.push('/')
  }

  return (
    <StyledNav initial='hidden' animate='show'>
      <Logo onClick={clearSearchedData}>
        <SiNintendogamecube className='logo' />

        <h1>GameGuide</h1>
      </Logo>

      <form className='search'>
        <input
          value={textInput}
          onChange={inputHandler}
          type='text'
          placeholder='Search game...'
        />
        <button onClick={submitSearch}>
          <FaSearch />
        </button>
      </form>
      {/* <div className="nav-links">
        {user && <Link to="/dashboard">My Library</Link>}
      </div> */}
    </StyledNav>
  )
}

// Styling
const StyledNav = styled(motion.nav)`
padding: 1rem 1rem;
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
    justify-content: space-evenly;
}
.nav-links > a {
    padding: 0rem 1rem;
}
form {
    flex: 5;
    
}
span {
    color: #ff5e00;
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

const Logo = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
color: #fff;
.logo {
    margin-right: 1rem;
    font-size: 3rem;
    fill: #ff5e00;
}
/* @media screen and (min-width: 319px) {
} */
`

export default SearchBar
