import React, { Component } from 'react'
import './App.css';
import parse from 'html-react-parser'

import Grid from '@material-ui/core/Grid';
import UserPhoto from './UserPhoto'
import UserInfo from './UserInfo'
import Repo from './Repo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gitHubUserData: {},
      starredRepos: [],
      starredRepoURLs: [],
      starredRepoURLContent: []
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/TimCPB")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({gitHubUserData: data})
      })
      fetch("https://api.github.com/users/TimCPB/starred")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({starredRepos: data})
        data.map(repo => this.state.starredRepoURLs.push((repo.url + "/readme")))
        console.log(this.state.starredRepoURLs)
      
      
        this.state.starredRepoURLs.map(repoURL => 
              fetch(repoURL)
              .then(response => response.json())
              .then(data => {
                const htmlz = atob(data.content)
                const htmlzz = parse(htmlz)
                const htmlzzz = htmlzz.join(' ')
                const htmlzzzz = htmlzzz.substr(0, 500)
                this.state.starredRepoURLContent.push(htmlzzzz)
                // console.log(this.state.starredRepoURLContent)
                // console.log(data.content)
              })

          )
        }
      )
  }

render() {
  return (
    <div className="AppStuff">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <UserPhoto photo={this.state.gitHubUserData.avatar_url} />
        </Grid>
        <Grid item xs={4}>
          <UserInfo data={this.state.gitHubUserData} />
        </Grid>
        <Grid item xs={4}>
          <Repo repoData={this.state.starredRepoURLContent[0]} />
        </Grid>
        <Grid item xs={4}>
          <Repo repoData={this.state.starredRepoURLContent[1]} />
        </Grid>
        <Grid item xs={4}>
          <Repo repoData={this.state.starredRepoURLContent[2]} />
        </Grid>
      </Grid>
      
    </div>
  );
}}

export default App;
