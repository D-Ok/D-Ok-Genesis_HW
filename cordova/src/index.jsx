import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'

const startApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.querySelector('#root'),
  )
}

window.cordova = window.cordova || false

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    startApp();
  }, false);
} else {
  startApp();
}
