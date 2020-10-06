import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class Repo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      readmeContents: props.repoData
    }
  }

  render() {
    return (
      <div>
      <ReactMarkdown source={this.state.readmeContents} />
      </div>
    )
  }
}

export default Repo;