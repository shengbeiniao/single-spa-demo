import React, { PureComponent } from "react"
import { Layout, Menu } from "antd"
import { navigateToUrl } from "single-spa"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import User from "./User"
import VM from "./VM"

const { Header, Content } = Layout

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isMain: ["/user", "/vm"].indexOf(location.pathname) >= 0,
      selectKey: location.pathname.split("/")[1]
    }
  }

  componentDidMount() {
    window.addEventListener("single-spa:routing-event", () => {
      console.log(location.pathname)
      this.setState({
        isMain: ["/","/user", "/vm"].indexOf(location.pathname) >= 0,
        selectKey: location.pathname.split("/")[1]
      })
    })
  }

  render() {
    const { isMain } = this.state

    return (
      <Router>
        <Layout style={{ height: "100%" }}>
          <Header style={{ height: "50px" }}>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[this.state.selectKey]}
            >
              <Menu.Item key="user">
                <Link to="/user">User</Link>
              </Menu.Item>
              <Menu.Item key="vm">
                <Link to="/vm">VM</Link>
              </Menu.Item>
              <Menu.Item key="app1" onClick={() => navigateToUrl("/app1/user")}>
                App1
              </Menu.Item>
              <Menu.Item key="app2" onClick={() => navigateToUrl("/app2")}>
                App2
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            {isMain ? (
              <div style={{ padding: "50px" }}>
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/user" />
                  </Route>
                  <Route path="/user">
                    <User />
                  </Route>
                  <Route path="/vm">
                    <VM />
                  </Route>
                </Switch>
              </div>
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
