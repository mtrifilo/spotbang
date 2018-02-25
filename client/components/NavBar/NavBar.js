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
      showAuthenticatedLinks: false,
      mounted: false
    }
  }

  componentDidMount = () => {
    if (this.props.isAuthenticated) {
      this.setState({ showAuthenticatedLinks: true, mounted: true })
    } else {
      this.setState({ mounted: true })
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.isAuthenticated) {
      this.setState({ showAuthenticatedLinks: true })
    } else {
      this.setState({ showAuthenticatedLinks: false })
    }
  }

  render () {
    let displayLinks
    if (this.state.mounted && this.props.isAuthenticated !== null) {
      displayLinks = this.state.showAuthenticatedLinks ? (
        <AuthenticatedLinks location={this.props.location} />
      ) : (
        <GuestLinks />
      )
    } else {
      displayLinks = null
    }

    // return (
    //   <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
    //     <button
    //       className='navbar-toggler navbar-toggler-right'
    //       type='button'
    //       role='button'
    //       data-toggle='collapse'
    //       data-target='#navbarNavAltMarkup'
    //       aria-controls='navbarNavAltMarkup'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //     >
    //       <span className='navbar-toggler-icon' />
    //     </button>
    //       <Link to='/' className='navbar-brand'>
    //       SpotBang
    //       </Link>
    //     {displayLinks}
    //   </nav>
    // )

    return (
      <Menu>
        <Menu.Item header>
          <Link to='/'>SpotBang</Link>
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
