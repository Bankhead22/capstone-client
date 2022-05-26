import React from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'

// styling
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Nav = () => {
  // fetch categories
  const dispatch = useDispatch()

  // change category
  const changeCategory = (category) => {
    dispatch({ type: 'CHANGE_CATEGORY', payload: { category: category } })
    dispatch({ type: 'CLEAR_SEARCHED' })
  }
  const { category } = useSelector((state) => state.category)

  return (
    <StyledHeader>
      <button
        className={category === 'popular' ? 'current' : ''}
        onClick={() => changeCategory('popular')}>
        Popular
      </button>
      <button
        className={category === 'upcoming' ? 'current' : ''}
        onClick={() => changeCategory('upcoming')}>
        Upcoming
      </button>
      <button
        className={category === 'new' ? 'current' : ''}
        onClick={() => changeCategory('new')}>
        New
      </button>
    </StyledHeader>
  )
}

// Styling
const StyledHeader = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    button {
      padding: 0.5rem 1rem;
      border: none;
      cursor: pointer;
      background: transparent;
      font-size: 1.2rem;
      font-weight: bold;
      color: #fff;
      border-radius: 0.3rem;
    }

    .current {
      color: #ff5e00;
    }
  `

export default Nav
