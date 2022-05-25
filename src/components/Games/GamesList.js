import React, { Fragment } from 'react'
import { Grid, Paper } from '@mui/material'
import Game from './Game'

const GamesList = ({ popularGames }) => (
  <Fragment>
    <Grid item xs={12} md={6} lg={4}>
      <h3 className='mt-0'>Popular Games</h3>
      <Paper elevation={3} className='games-container'>
        <Grid container spacing={2}>
          <Game games={popularGames} listofgames /> Hello
        </Grid>
      </Paper>
    </Grid>
  </Fragment>
)

export default GamesList
