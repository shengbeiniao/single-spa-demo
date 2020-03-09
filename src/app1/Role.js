import React from "react"
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'

export default function() {
  const history = useHistory()

  return (
    <div>
      <h1>Role</h1>
      <Button onClick={()=>history.push('/user')}>Go to User</Button>
    </div>
  )
}
