import React, { PureComponent } from "react";
import { Layout, Menu } from "antd";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import User from "./User";
import VM from "./VM";

const { Content, Sider } = Layout;

export default class App extends PureComponent {
  render() {
    const selectKey = location.pathname.split('/app1/')[1]

    return (
      <Router basename="/app1">
        <Layout style={{ height: "100%" }}>
          <Sider>
            <Menu style={{ height: "100%" }} defaultSelectedKeys={[selectKey]}>
              <Menu.Item key="user">
                <Link to="/user">User</Link>
              </Menu.Item>
              <Menu.Item key="vm">
                <Link to="/vm">VM</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Switch>
              <Route exact path = "/">
                <Redirect to="/user"/>
              </Route>
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
    );
  }
}
