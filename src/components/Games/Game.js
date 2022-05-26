import React from 'react'
import { Link, useHistory } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'
import { loadGameDetails } from '../../actions/gameDetails'

// styling
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaPlus } from 'react-icons/fa'

// images
import { smallImage } from '../../utils'
import { createGame } from '../../api/game'

const Game = ({ game, user }) => {
  // const { user } = useSelector((state) => state.user)
  // const { libraryGames } = useSelector((state) => state.library)
  const history = useHistory()
  // const stringPathId = id.toString()
  // const [gameInLibrary, setGameInLibrary] = useState(
  // libraryGames.some((game) => game.id === id.toString())
  // )

  // load details
  const dispatch = useDispatch()

  const loadDetailHandler = () => {
    dispatch(loadGameDetails(game.id))
  }
  const addToLibrary = async (e) => {
    if (user) {
      // send game data to db and add to library
      createGame(game, user)
    } else {
      history.push('/sign-in')
    }
  }

  return (
    <StyledGame>
      <div onClick={loadDetailHandler}>
        <Link to={`/game/${game.id}`}>
          <img src={smallImage(game.background_image, 640)} alt={game.name} />
          <h3>{game.name}</h3>
          <p> {game.released}</p>
        </Link>
      </div>
      <div>
        <FaPlus
          className='icon'
          title='Add to Library'
          onClick={addToLibrary}
        />
      </div>
    </StyledGame>
  )
}

// styling
const StyledGame = styled(motion.div)`
    background-color: #343a40;
    min-height: 30vh;
    max-width: 20rem;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    
    h3,
    p {
      padding: 0.5rem 0.4rem;
      

    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 400px;
    }
    img {
      width: 100%;
      height: 25vh;
      object-fit: cover;
      aspect-ratio: 16/10;
    }
    .icon {
      font-size: 1.2rem;
      color: #ff5e00;
      margin-right: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .icon:hover {
      color: #ff5e00;
    }

  `
// const StyledSelect = styled.select`
//   background-color: #ffffff;
//   border: none;
//   padding: 0.2rem 1rem;
//   border-radius: 0.2rem;
//   margin-right: 1rem;
//   .remove {
//     color: red;
//   }
// `

export default Game
