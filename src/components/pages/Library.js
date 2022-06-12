import React, { useEffect, useState } from 'react'

import { indexGames } from '../../api/game'

// redux
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// // import { useLocation } from 'react-router'
// import { loadGames } from '../../actions/gameActions'

// components
// import Nav from '../Nav/Nav'
import Game from '../Games/Game'

// styling
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Avatar from '../../components/Avatar'
import { FaHeart, FaMedal } from 'react-icons/fa'
import { IoLogoGameControllerB } from 'react-icons/io'

const Library = ({ user }) => {
  // const { libraryGames } = useSelector((state) => state.library)

  const [games, setGames] = useState([])
  // const [inLibrary, setInLibrary] = useState(true)

  useEffect(() => {
    // if (inLibrary === false) { setInLibrary(true) }
    indexGames(user)
      .then((res) => setGames(res.data.games))
  }, [])

  //   return (
  //     <>
  //       <StyledList>
  //         <h3>{user.email}</h3>
  //         { games
  //           ? (
  //             <>
  //               <h2>Library</h2>
  //               <StyledGame>
  //                 {games.map((game) => (
  //                   <Game
  //                     game={game}
  //                     name={game.name}
  //                     released={game.released}
  //                     id={game.id}
  //                     image={game.background_image}
  //                     key={game.id}
  //                   />
  //                 ))}

  //               </StyledGame>
  //             </>
  //           )
  //           : 'Needs more games... Add some'}

  //       </StyledList>
  //     </>
  //   )
  // }

  // const StyledList = styled(motion.div)`
  //         padding: 0rem 1rem;
  //         margin-bottom: 2rem;
  //         h2 {
  //             padding: 2rem 0rem;
  //             font-size: 2.2rem;
  //         }

  //         @media screen and (min-width: 720px) {
  //             padding: 0rem 5rem;
  //         }
  // `
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
  return (
    <DashboardContainer>
      <div className="user-details">
        <Avatar email={user && user.email} />
        <h3>{user && user.email}</h3>
      </div>
      <h3>
        <FaHeart /> Wishlist
      </h3>
      <Games>
        {games.map(
          (game) =>
            game.type === 'wishlist' && (
              <Game
                // location={location}
                game={game}
                inLibrary={true}
                type={game.type}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.image}
                key={game.id}
              />
            )
        )}
      </Games>
      <h3>
        <IoLogoGameControllerB /> Currently Playing
      </h3>
      <Games>
        {games.map(
          (game) =>
            game.type === 'current' && (
              <Game
                // location={location}
                inLibrary={true}
                type={game.type}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.image}
                key={game.id}
              />
            )
        )}
      </Games>
      <h3>
        <FaMedal /> Completed
      </h3>
      <Games>
        {games.map(
          (game) =>
            game.type === 'completed' && (
              <Game
                // location={location}
                inLibrary={true}
                type={game.type}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.image}
                key={game.id}
              />
            )
        )}
      </Games>
    </DashboardContainer>
  )
}
const DashboardContainer = styled.div`
  padding: 0rem 1rem;
  width: 100%;
  margin-bottom: 2rem;
  @media screen and (min-width: 720px) {
    padding: 0rem 5rem;
  }
  .user-details {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
      height: 1.7rem;
      width: 1.7rem;
    }
  }
`

const Games = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;
  @media screen and (min-width: 420px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`

export default Library
