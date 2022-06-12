import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexGames = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/library',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteGame = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/library',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const createGame = (game, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/library',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: game
  })
}

export const updateGame = (game, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/library',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: game
  })
}
