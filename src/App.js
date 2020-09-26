import React, { Component } from 'react'
import './App.css';
import Grid from '@material-ui/core/Grid';
import UserPhoto from './UserPhoto'
import UserInfo from './UserInfo'

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
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={10}>
          Hullo, world!
          <UserPhoto photo={this.state.gitHubUserData.avatar_url} />
        </Grid>
        <Grid item xs={2}>
          
          <UserInfo data={this.state.gitHubUserData} />
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}}

export default App;
