import React, { useState, useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { loadGames } from '../../actions/gameActions'

// components
import Nav from '../Nav/Nav'
import Game from '../Games/Game'

// styling
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HomePage = ({ user }) => {
  // getting the current location
  const location = useLocation()
  console.log(user)

  // Fetch Games from api and storing in the redux store
  const dispatch = useDispatch()

  //   Getting data from the redux store
  const { popularGames, upcomingGames, newGames, searched } = useSelector(
    (state) => state.games
  )

  // Switching category
  const { category } = useSelector((state) => state.category)
  const [type, setType] = useState(popularGames)

  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  // set type;
  useEffect(() => {
    switch (category) {
    case 'popular':
      setType(popularGames)
      // type = popularGames;
      break
    case 'upcoming':
      // type = upcomingGames;
      setType(upcomingGames)
      break
    case 'new':
      // type = newGames;
      setType(newGames)
      break
    }
  }, [category, popularGames])

  return (
    <>
      <StyledList>
        <Nav />
        {searched.length
          ? (
            <>
              <h2>Searched Results</h2>
              <StyledGame>
                {searched.map((game) => (
                  <Game
                    user={user}
                    game={game}
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    image={game.background_image}
                    key={game.id}
                    location={location}
                  />
                ))}
              </StyledGame>
            </>
          )
          : (
            <>
              <h2>{type?.name}</h2>
              <StyledGame>
                {type.data
                  ? type.data.map((game) => (
                    <Game
                      user={user}
                      game={game}
                      name={game.name}
                      released={game.released}
                      id={game.id}
                      image={game.background_image}
                      key={game.id}
                      location={location}
                    />
                  ))
                  : 'Loading...'}
              </StyledGame>
            </>
          )}
      </StyledList>
    </>
  )
}

const StyledList = styled(motion.div)`
padding: 0rem 1rem;
margin-bottom: 2rem;
h2 {
    padding: 2rem 0rem;
    font-size: 2.2rem;
}

@media screen and (min-width: 720px) {
    padding: 0rem 5rem;
}
`
const StyledGame = styled(motion.div)`
min-height: 80vh;
display: grid;
grid-column-gap: 3rem;
grid-row-gap: 5rem;
justify-items: center;
@media screen and (min-width: 420px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
`

export default HomePage
