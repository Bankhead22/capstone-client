import React, { useEffect } from 'react'

import { indexGames } from '../../api/game'

// redux
// import { useDispatch } from 'react-redux'
// // import { useLocation } from 'react-router'
// import { loadGames } from '../../actions/gameActions'

// components
// import Nav from '../Nav/Nav'
// import Game from '../Games/Game'

// styling
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Library = ({ user }) => {
  // getting the current location
//   const [games, setGames] = useState([])
  //   const location = useLocation()

  // // Fetch Games from api and storing in the redux store
  //   const dispatch = useDispatch()

  // //   Getting data from the redux store
  // const { popularGames, upcomingGames, newGames, searched } = useSelector(
  // (state) => state.games
  // )

  // get library game data from db?

  useEffect(() => {
    indexGames(user)
      .then((res) => console.log(res))
  }, [])

  return (
    <>
      <StyledList>
        {/* { libraryGames.length
          ? (
            <>
              <h2>Library</h2>
              <StyledGame>
                {libraryGames.map((user) => (
                  <Game
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
                : 'Needs more games...'} */} Add some games

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
// const StyledGame = styled(motion.div)`
//             min-height: 80vh;
//             display: grid;
//             grid-column-gap: 3rem;
//             grid-row-gap: 5rem;
//             justify-items: center;
//             @media screen and (min-width: 420px) {
//                 grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
//             }
//             `

export default Library
