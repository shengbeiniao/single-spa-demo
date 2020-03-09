import React from "react"
import { Button } from "antd"
import { useHistory } from "react-router-dom"
import { navigateToUrl } from "single-spa"

export default function() {
  const history = useHistory()

  return (
    <div>
      <h1>Volume</h1>
      <p>
        <Button onClick={() => history.push("/vm")}>Go to VM</Button>
      </p>
      <p>
        <Button onClick={() => navigateToUrl("/app1/user")}>
          Go to App1/User
        </Button>
      </p>
    </div>
  )
}
