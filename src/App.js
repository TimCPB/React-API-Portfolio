import React, { Component } from 'react'
import './App.css';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gitHubUserData: {}
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/TimCPB")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({gitHubUserData: data})
      })
  }

render() {
  return (
    <div className="AppStuff">
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
}}

export default App;
