import React from 'react'
import ReactDOM from 'react-dom'
import App from './ClientApp'
import 'semantic-ui-css/semantic.min.css'
import './main.css'

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.hydrate(<App />, document.getElementById('app'))
})
