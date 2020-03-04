import React, { PureComponent } from "react"
import { Button } from "antd"

export default class extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      current: new Date().toLocaleTimeString()
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.current}</h1>
        <Button
          onClick={() =>
            this.setState({ current: new Date().toLocaleTimeString() })
          }
        >
          Test
        </Button>
      </div>
    )
  }
}
