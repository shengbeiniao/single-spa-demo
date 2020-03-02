import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let container = document.getElementById('root-slave')

export function bootstrap(props) {
  return Promise.resolve()
}

export function mount() {
  return Promise.resolve().then(() => {
    ReactDOM.render(<App />, container)
  })
}

export function unmount() {
  ReactDOM.unmountComponentAtNode(container)
  return Promise.resolve()
}
