import React, { PureComponent } from "react"
import { Layout, Menu } from "antd"
import { navigateToUrl } from "single-spa"

const { Header, Content } = Layout

export default class App extends PureComponent {

  render() {
    const selectKey = location.pathname.split("/")[1]

    return (
      <Layout style={{ height: "100%" }}>
        <Header style={{ height: "50px" }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectKey]}
          >
            <Menu.Item key="app1" onClick={() => navigateToUrl("/app1")}>
              App1
            </Menu.Item>
            <Menu.Item key="app2" onClick={() => navigateToUrl("/app2")}>
              App2
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div id="root-slave"></div>
        </Content>
      </Layout>
    )
  }
}
