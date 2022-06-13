import React, { useEffect, useState } from 'react'
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

// api
import { createGame } from '../../api/game'

const Game = ({ game, user }) => {
  // const { user } = useSelector((state) => state.user)
  // const { libraryGames } = useSelector((state) => state.library)
  const history = useHistory()
  // const stringPathId = id.toString()
  const [category, setCategory] = useState(game.type)
  const [gameInLibrary, setGameInLibrary] = useState(false
  )

  // load details
  const dispatch = useDispatch()

  const loadDetailHandler = () => {
    dispatch(loadGameDetails(game.id))
  }

  // add game to library
  const addToLibrary = async (e) => {
    setGameInLibrary(true)
    // if signed in
    if (user) {
      // send game data to db and add to library
      try {
        await createGame(game, user)
        // console.log(user)
      } catch (error) {
        // console.log(error)

      }
    } else {
      history.push('/sign-in')
    }
  }

  const handleCategoryChange = (e) => {
    e.stopPropagation()
    setCategory(e.target.value)
  }

  useEffect(() => {
    // update and remove library data
    // change category of library data
    async function setLibraryData () {
      if (game.inLibrary) {
        if (category === 'remove') {
          // user is undefined(reading token). dont know how to solve issue

          // await deleteGame(game.id, user)
          //   .then(() => setGameInLibrary(false))
          //   .catch((err) => console.log(err))

          // await console.log(game)
          // await console.log(user)
        } else {
          // await updateGame(user, { type: category })
          // await updateGame(user, game)
        }
      }
    }
    setLibraryData()
  }, [category])

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
        {game.inLibrary
          ? (
            <div>
              <StyledSelect value={category} onChange={handleCategoryChange}>
                <option value='wishlist'>Wishlist</option>
                <option value='current'>Currently Playing</option>
                <option value='completed'>Completed</option>
                <option className='remove' value='remove'>
                Remove from Library
                </option>
              </StyledSelect>
            </div>
          )
          : (
            !gameInLibrary && (
              <FaPlus
                className='icon'
                title='Add to Library'
                onClick={addToLibrary}
              />
            )
          )}
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
      aspect-ratio: 16/9;
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
const StyledSelect = styled.select`
      background-color: #ffffff;
      border: none;
      padding: 0.2rem 1rem;
      border-radius: 0.2rem;
      margin-right: 1rem;
      .remove {
        color: red;
      }
    `

export default Game
