import React from "react"
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'

export default function() {
  const history = useHistory()

  return (
    <div>
      <h1>User</h1>
      <Button onClick={()=>history.push('/vm')}>Go to VM</Button>
    </div>
  )
}
