import React, { PureComponent } from 'react'
import { Layout, Menu } from 'antd'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import User from './User'
import VM from './VM'

const { Content, Sider } = Layout

export default class App extends PureComponent {
  render() {
    return (
      <Router basename="/react">
        <Layout style={{ height: '100%' }}>
          <Sider>
            <Menu style={{ height: '100%' }}>
              <Menu.Item key="user">
                <Link to="/user">User</Link>
              </Menu.Item>
              <Menu.Item key="vm">
                <Link to="/vm">VM</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content>{this.props.children}</Content>
          </Layout>
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
