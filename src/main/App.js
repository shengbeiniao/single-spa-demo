import React, { PureComponent } from 'react'
import { Layout, Menu } from 'antd'
import { navigateToUrl } from 'single-spa'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import User from './User'
import VM from './VM'

const { Header, Content } = Layout

export default class App extends PureComponent {
  render() {
    return (
      <Router basename="/">
        <Layout style={{ height: '100%' }}>
          <Header style={{ height: '50px' }}>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="user">
                <Link to="/user">User</Link>
              </Menu.Item>
              <Menu.Item key="vm">
                <Link to="/vm">VM</Link>
              </Menu.Item>
              <Menu.Item key="app1" onClick={() => navigateToUrl('/app1')}>
                App1
              </Menu.Item>
              <Menu.Item key="app2" onClick={() => navigateToUrl('/app2')}>
                App2
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <div id="root-slave"></div>
          </Content>
        </Layout>

        <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/vm">
            <VM />
          </Route>
        </Switch>
      </Router>
    )
  }
}
