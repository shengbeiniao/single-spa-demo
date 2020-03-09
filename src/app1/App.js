import React, { PureComponent } from "react"
import { Layout, Menu } from "antd"

import {
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import User from "./User"
import Role from "./Role"

const { Content, Sider } = Layout

class _LeftSilder extends PureComponent {
  render() {
    const selectKey = this.props.location.pathname.split("/")[1]
    return (
      <Sider>
        <Menu style={{ height: "100%" }} selectedKeys={[selectKey]}>
          <Menu.Item key="user">
            <Link to="/user">User</Link>
          </Menu.Item>
          <Menu.Item key="role">
            <Link to="/role">Role</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

const LeftSider = withRouter(_LeftSilder)

export default class App extends PureComponent {
  render() {
    return (
      <Router basename="/app1">
        <Layout style={{ height: "100%" }}>
          <LeftSider />
          <Content style={{ padding: "30px" }}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/user" />
              </Route>
              <Route path="/user">
                <User />
              </Route>
              <Route path="/role">
                <Role />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    )
  }
}
