import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { func, string, shape } from 'prop-types'

const GuestLinks = props => (
  <div>
    <div>
      <Menu.Item
        as={Link}
        to='/login'
        position='right'
        onClick={props.handleItemClick}
        active={props.location.pathname === '/login'}
      >
        Login
      </Menu.Item>
    </div>
  </div>
)

GuestLinks.propTypes = {
  handleItemClick: func.isRequired,
  location: shape({
    hash: string,
    key: string,
    pathname: string.isRequired,
    search: string
  })
}

export default GuestLinks
