import React, { PureComponent } from "react"
import { Layout, Menu } from "antd"
import { navigateToUrl } from "single-spa"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import User from "./User"
import VM from "./VM"

const { Header, Content } = Layout

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isMain: ["/user", "/vm"].indexOf(location.pathname) >= 0
    }
  }

  componentDidMount() {
    window.addEventListener("single-spa:routing-event", () => {
      this.setState({
        isMain: ["/user", "/vm"].indexOf(location.pathname) >= 0
      })
    })
  }

  render() {
    const { isMain } = this.state

    const selectKey = location.pathname.split("/")[1]

    return (
      <Router>
        <Layout style={{ height: "100%" }}>
          <Header style={{ height: "50px" }}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[selectKey]}
            >
              <Menu.Item key="user">
                <Link to="/user">User</Link>
              </Menu.Item>
              <Menu.Item key="vm">
                <Link to="/vm">VM</Link>
              </Menu.Item>
              <Menu.Item key="app1" onClick={() => navigateToUrl("/app1")}>
                App1
              </Menu.Item>
              <Menu.Item key="app2" onClick={() => navigateToUrl("/app2")}>
                App2
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            {isMain ? (
              <Switch>
                <Route path="/user">
                  <User />
                </Route>
                <Route path="/vm">
                  <VM />
                </Route>
              </Switch>
            ) : null}
            <div
              id="root-slave"
              style={{ display: isMain ? "none" : "block" }}
            ></div>
          </Content>
        </Layout>
      </Router>
    )
  }
}
