import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Nav = () => {
  const dispatch = useDispatch()

  const changeCategory = (cate) => {
    dispatch({ type: 'CHANGE_CATEGORY', payload: { category: cate } })
    dispatch({ type: 'CLEAR_SEARCHED' })
  }
  const { category } = useSelector((state) => state.category)

  return (
    <header>
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
    </header>
  )
}

export default Nav
