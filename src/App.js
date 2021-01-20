import React, { Component } from "react";
import uniqid from "uniqid";
import General from "./components/General";
import Educational from "./components/Educational";
import Work from "./components/Work"

class App extends Component {
  constructor() {
    super()
  
    this.state = {
       name: 'initialName',
       email: 'initial@email',
       phone: '123',
       school: "",
       title: "",
       startEduDate: "",
       endEduDate: "",
       companyName: "",
       position: "",
       tasks: "",
       startWorkDate: "",
       endWorkDate: "",
    }
  }
  
  genUpdate = (info) => {
    this.setState({
      name: info.name,
      email: info.email,
      phone: info.phone
    })
}

eduUpdate = (info) => {
  this.setState({
    school: info.school,
    title: info.title,
    startEduDate: info.startEduDate,
    endEduDate: info.endEduDate,
  })
}

workUpdate = (info) => {
  this.setState({
    companyName: info.companyName,
    position: info.position,
    tasks: info.tasks,
    startWorkDate: info.startWorkDate,
    endWorkDate: info.endWorkDate,
  })
}
   
  render() {
    return (
      <div>
        <General passInfo = {this.genUpdate}/>
        <Educational passInfo = {this.eduUpdate}/>
        <Work passInfo = {this.workUpdate}/>
        <ul>
          {Object.values(this.state).map((info) => {
            return <li key={uniqid()}>{info}</li>;
          })}
        </ul>
      </div>
    )
  }
}

export default App;