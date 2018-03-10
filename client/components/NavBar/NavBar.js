import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bool, object } from 'prop-types'
import { Menu } from 'semantic-ui-react'

import GuestLinks from './GuestLinks'
import AuthenticatedLinks from './AuthenticatedLinks'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayLinks: false,
      showAuthenticatedLinks: false,
      mounted: false
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeRoute: name })
  }

  componentDidMount = () => {
    if (this.props.isAuthenticated) {
      this.setState({ showAuthenticatedLinks: true, mounted: true })
    } else {
      this.setState({ mounted: true })
    }
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      showAuthenticatedLinks: Boolean(nextProps.isAuthenticated)
    })
  }

  render () {
    let displayLinks = null
    if (this.state.mounted && this.props.isAuthenticated !== null) {
      displayLinks = this.state.showAuthenticatedLinks ? (
        <AuthenticatedLinks
          location={this.props.location}
          handleItemClick={this.handleItemClick}
        />
      ) : (
        <GuestLinks
          location={this.props.location}
          activeRoute={this.state.activeItem}
          handleItemClick={this.handleItemClick}
        />
      )
    }

    return (
      <Menu inverted borderless>
        <Menu.Item as={Link} to='/' position='left'>
          SpotBang
        </Menu.Item>
        {displayLinks}
      </Menu>
    )
  }
}

NavBar.propTypes = {
  isAuthenticated: bool,
  location: object.isRequired
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default connect(mapStateToProps)(NavBar)
