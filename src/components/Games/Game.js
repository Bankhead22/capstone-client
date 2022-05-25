import React from 'react'
import { Link } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'

import { smallImage } from '../../utils'
import { loadGameDetails } from '../../actions/gameDetails'

const Game = ({ game }) => {
//   const stringPathId = game.id.toString()
  const dispatch = useDispatch()

  const loadDetailHandler = () => {
    dispatch(loadGameDetails(game.id))
  }

  return (
    <div>
      <div onClick={loadDetailHandler}>
        <Link to={`/game/${game.id}`}>
          <h3>{game.name}</h3>
          <p>released: {game.released}</p>
          <img src={smallImage(game.background_image, 640)} alt={game.name} />
        </Link>
      </div>
    </div>
  )
}

export default Game
