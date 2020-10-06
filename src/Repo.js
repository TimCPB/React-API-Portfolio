import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import parse from 'html-react-parser'

class Repo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repoData: props.repoData,
      repoReadmeContent: ''
    }
  }

  componentDidMount() {
    fetch(this.state.repoData.url + "/readme")
    .then(response => response.json())
    .then(data => {
      const htmlz = atob(data.content)
      const htmlzz = parse(htmlz)
      const htmlzzz = htmlzz.join(' ')
      const htmlzzzz = htmlzzz.substr(0, 500)
      this.setState({repoReadmeContent: htmlzzzz})
  })
}

  render() {
    return (
      <div>
      {this.state.repoData.name}
      <ReactMarkdown source={this.state.repoReadmeContent} />
      </div>
    )
  }
}

export default Repo;