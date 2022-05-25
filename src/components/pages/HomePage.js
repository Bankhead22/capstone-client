import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'

import { loadGames } from '../../actions/gameActions'

import Nav from '../Nav/Nav'
import Game from '../Games/Game'

const HomePage = () => {
  // getting the current location
  const location = useLocation()

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

  // let type;
  useEffect(() => {
    switch (category) {
    case 'popular':
      setType(popularGames)
      console.log(type.data)
      // type = popularGames;
      break
    case 'upcoming':
      // type = upcomingGames;
      setType(upcomingGames)
      console.log(type.data)
      break
    case 'new':
      // type = newGames;
      setType(newGames)
      console.log(type.data)
      break
    }
  }, [category, popularGames])

  return (
    <div>
      <Nav />
      <h1>{type?.name}</h1>
      {searched.length
        ? (
          <div>
            <h2>Searched Results</h2>
            <div>
              {/* {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                  location={location}
                />
              ))} */}
            </div>
          </div>
        )
        : (
          <>
            <h2>{type?.name}</h2>
            <div>
              {type.data
              // ? type.data.map((game) => (
              //   <h5 key={game.id}>
              //     {game.name}
              //     released: {game.released}
              //   </h5>

                // ))
                ? type.data.map((game) => (
                  <Game
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
            </div>
          </>
        )}
    </div>
  )
}

export default HomePage
