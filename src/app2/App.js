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
import VM from "./VM"
import Volume from "./Volume"

const { Content, Sider } = Layout

class _LeftSilder extends PureComponent {
  render() {
    const selectKey = this.props.location.pathname.split("/")[1]
    return (
      <Sider>
        <Menu style={{ height: "100%" }} selectedKeys={[selectKey]}>
          <Menu.Item key="vm">
            <Link to="/vm">VM</Link>
          </Menu.Item>
          <Menu.Item key="volume">
            <Link to="/volume">Volume</Link>
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
      <Router basename="/app2">
        <Layout style={{ height: "100%" }}>
          <LeftSider />
          <Content style={{ padding: "30px" }}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/vm" />
              </Route>
              <Route path="/vm">
                <VM />
              </Route>
              <Route path="/volume">
                <Volume />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    )
  }
}
