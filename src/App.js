import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={9}>
          Hullo, world!
        </Grid>
        <Grid item xs={3}>
          Me again!
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
