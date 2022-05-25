import React from 'react'
import { Link } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'

import { smallImage } from '../../utils'
import { loadGameDetails } from '../../actions/gameDetails'

import styled from 'styled-components'
import { motion } from 'framer-motion'

const Game = ({ game }) => {
  //   const stringPathId = game.id.toString()
  const dispatch = useDispatch()

  const loadDetailHandler = () => {
    dispatch(loadGameDetails(game.id))
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
    </StyledGame>
  )
}

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
// `;

export default Game
