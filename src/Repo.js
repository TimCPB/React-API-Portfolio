import React, { Component } from 'react'

class Repo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      readmeContents: ''
    }
  }
  componentDidMount() {
    // const apiUrl = this.props.repoData + "/readme"
    // console.log(apiUrl)
    // console.log(this.props.repoData)
    
      // fetch(apiUrl)
      // .then(response => response.json())
      // .then(data => {
      //   console.log(data)
      //   this.setState({readmeContents: data})
      // })
  }

  render() {
    return (
      <div>
      Howdy y'all
      {this.props.repoData}
      </div>
    )
  }
}

export default Repo;