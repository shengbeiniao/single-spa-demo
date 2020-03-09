import React from "react"
import { Button } from "antd"
import { navigateToUrl } from "single-spa"

export default function() {
  return (
    <div>
      <h1>User</h1>
      <p>
        <Button onClick={() => navigateToUrl("/app1/user")}>
          Go to App1/User
        </Button>
      </p>
      <p>
        <Button onClick={() => navigateToUrl("/app2/volume")}>
          Go to App2/Volume
        </Button>
      </p>
    </div>
  )
}
