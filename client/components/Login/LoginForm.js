import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginRequest } from '../../redux/modules/loginLocal'
import Input from '../Common/Input'
import {
  loginFormValidation,
  validateEmail,
  validatePassword
} from '../../../server/validation/loginFormValidation'
import { func, object } from 'prop-types'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      validationErrors: {
        email: '',
        password: ''
      }
    }
  }

  onChangeHandler = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  onBlurHandler = evt => {
    if (evt.target.name === 'email') {
      this.setValidationError(validateEmail(this.state.email))
    }
    if (evt.target.name === 'password') {
      this.setValidationError(validatePassword(this.state.password))
    }
  }

  setValidationError = validationResult => {
    // Set validation result to state
    const newValidationErrors = Object.assign(
      {},
      this.state.validationErrors,
      validationResult
    )
    this.setState({ validationErrors: newValidationErrors })
  }

  onSubmitHandler = evt => {
    evt.preventDefault()
    const { email, password } = this.state
    const userData = { email, password }
    const validation = loginFormValidation(userData)
    if (validation.isValid) {
      return this.props.dispatchLoginRequest(userData)
    } else {
      return this.setValidationError(validation.validationErrors)
    }
  }

  render () {
    return (
      <form className='login-form' onSubmit={this.onSubmitHandler}>
        <Input
          label='Email'
          type='text'
          name='email'
          onChange={this.onChangeHandler}
          onBlur={this.onBlurHandler}
          value={this.state.email}
          validationError={this.state.validationErrors.email}
        />
        <Input
          label='Password'
          type='password'
          name='password'
          onChange={this.onChangeHandler}
          onBlur={this.onBlurHandler}
          value={this.state.password}
          validationError={this.state.validationErrors.password}
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    )
  }
}

LoginForm.propTypes = {
  dispatchLoginRequest: func.isRequired
}

LoginForm.contextTypes = {
  router: object.isRequired
}

const mapStateToProps = state => {
  return {
    loginLoading: state.loginLocal.loginLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoginRequest (userData) {
      dispatch(loginRequest(userData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
