import React, { PureComponent } from "react"
import { Layout } from "antd"
import * as singleSPA from "single-spa"

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
    return (
      <Router>
        <Layout style={{ height: "100%" }}>
          <Header style={{ height: "50px", lineHeight: "50px" }}>
            <Link to="/user" style={{ marginRight: "20px" }}>
              User
            </Link>
            <Link to="/vm">VM</Link>
          </Header>
          <Content style={{ padding: "50px" }}>
            <Switch>
              <Route path="/user">
                <User />
              </Route>
              <Route path="/vm">
                <VM />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    )
  }
}
