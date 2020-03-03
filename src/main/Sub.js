import React, { PureComponent } from "react"
import { UserContext } from "./User"

export default class extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {
          current => {
            return <h1>{current.date}</h1>
          }
        }
      </UserContext.Consumer>
    )
  }
}
