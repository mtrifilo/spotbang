import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Curated', render: () => <div>Featured</div> },
  { menuItem: 'Artist', render: () => <div>Artist</div> },
  { menuItem: 'Media', render: () => <div>Media</div> },
  { menuItem: 'User', render: () => <div>User</div> }
]

class Home extends Component {
  render () {
    return (
      <Tab panes={panes} />
    )
  }
}

export default Home
