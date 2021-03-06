import React from "react"
import { Button } from "antd"
import { useHistory } from "react-router-dom"
import { navigateToUrl } from "single-spa"

export default function() {
  const history = useHistory()

  return (
    <div>
      <h1>User</h1>
      <p>
        <Button onClick={() => navigateToUrl("/vm")}>Go to Main/VM</Button>
      </p>
      <p>
        <Button onClick={() => history.push("/role")}>Go to Role</Button>
      </p>
      <p>
        <Button onClick={() => navigateToUrl("/app2/volume")}>
          Go to App2/Volume
        </Button>
      </p>
    </div>
  )
}
