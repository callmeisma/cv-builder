import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work"
import ViewMode from "./components/ViewMode"

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      editMode: true,
    };
  }

  toggleMode = () => {
    if (this.state.editMode) {
      this.setState({editMode: false});
    } else {
      this.setState({editMode: true});
    }
  }
  
  render() {
    return (
      <div>
        <h1>Resume Builder</h1>
        <ViewMode editMode = {this.state.editMode} changeMode = {this.toggleMode}/>
        <General editMode = {this.state.editMode}/>
        <Education editMode = {this.state.editMode}/>
        <Work editMode = {this.state.editMode}/>
      </div>
    );
  }
}

export default App;