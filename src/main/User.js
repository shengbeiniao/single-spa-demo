import React, { PureComponent } from "react";
import Sub from "./Sub";

export const UserContext = React.createContext({
  date: new Date().toTimeString()
});

let timer

export default class extends PureComponent {
  
  constructor(props){
    super(props)
    this.state = {
      current:{
        date: new Date().toTimeString()
      }
    }
  }

  componentDidMount(){
    timer = setInterval(() => {
      this.setState({
        current:{
          date: new Date().toTimeString()
        }
      })
      // console.log(this.state.current)
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(timer)
  }

  render(){
    return (
      <UserContext.Provider value={this.state.current}>
        <div>
          <h1>User</h1>
          <Sub />
        </div>
      </UserContext.Provider>
    )
  }
}
