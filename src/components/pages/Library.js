import React, { useEffect, useState } from 'react'

import { indexGames } from '../../api/game'

// redux
// import { useDispatch } from 'react-redux'
// // import { useLocation } from 'react-router'
// import { loadGames } from '../../actions/gameActions'

// components
// import Nav from '../Nav/Nav'
import Game from '../Games/Game'

// styling
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Library = ({ user }) => {
  const [games, setGames] = useState([])
  const [inLibrary, setInLibrary] = useState(true)

  useEffect(() => {
    if (inLibrary === false) { setInLibrary(true) }
    indexGames(user)
      .then((res) => setGames(res.data.games))
      .then(console.log(games))
  }, [])

  return (
    <>
      <StyledList>
        <h3>{user.email}</h3>
        { games
          ? (
            <>
              <h2>Library</h2>
              <StyledGame>
                {games.map((game) => (
                  <Game
                    game={game}
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    image={game.background_image}
                    key={game.id}
                  />
                ))}

              </StyledGame>
            </>
          )
          : 'Needs more games... Add some'}

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

export default Library
