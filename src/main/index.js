import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import AppExcludeReactRouter from './AppExcludeReactRouter'
import * as singleSpa from 'single-spa'

import './common.less'

ReactDom.render(<App />, document.getElementById('root'))

// test main app not include react-router
// ReactDom.render(<AppExcludeReactRouter />, document.getElementById('root'))

const apps = ['app1', 'app2']

apps.forEach(app => {
  singleSpa.registerApplication(
    app,
    () => import(`../${app}/index`),
    location => {
      return location.pathname.startsWith(`/${app}`)
    }
  )
})

singleSpa.start()
