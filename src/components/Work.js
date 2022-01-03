import React, { Component } from "react";
import uniqid from "uniqid";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allWork: [
        {
          companyName: "Company Abc",
          position: "Manager",
          tasks: "Work Work Work",
          startWorkDate: "2021-01",
          endWorkDate: "2022-01",
        },
      ],
    };
  }

  handleInputChange = (e, index) => {
    e.preventDefault();
    const list = [...this.state.allWork];
    list[index][e.target.name] = e.target.value;
    this.setState({
      allWork: list,
    });
  };

  handleAddClick = () => {
    this.setState({
      allWork: [
        ...this.state.allWork,
        {
          companyName: "",
          position: "",
          tasks: "",
          startWorkDate: "",
          endWorkDate: "",
        },
      ],
    });
  };

  handleRemoveClick = (index) => {
    const list = [...this.state.allWork];
    list.splice(index, 1);
    this.setState({
      allWork: list,
    });
  };

  render() {
    if (this.props.editMode) {
      return (
        <div className="flex-col form-cont">
          <h5>Experience</h5>
          {this.state.allWork.map((value, index) => {
            return (
              <div
                key={`value${index + 1}`}
                className="flex-row form-cont form-mini"
              >
                <div className="flex-col">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    onChange={(e) => this.handleInputChange(e, index)}
                    value={value.companyName}
                  ></input>
                </div>
                <div className="flex-col">
                  <label>Position</label>
                  <input
                    type="text"
                    name="position"
                    onChange={(e) => this.handleInputChange(e, index)}
                    value={value.position}
                  ></input>
                </div>
                <div className="flex-col">
                  <label>Work Done</label>
                  <input
                    name="tasks"
                    onChange={(e) => this.handleInputChange(e, index)}
                    value={value.tasks}
                  ></input>
                </div>
                <div className="flex-col">
                  <label>Date Started</label>
                  <input
                    type="month"
                    name="startWorkDate"
                    onChange={(e) => this.handleInputChange(e, index)}
                    value={value.startWorkDate}
                  ></input>
                </div>
                <div className="flex-col">
                  <label>Date Completed</label>
                  <input
                    type="month"
                    name="endWorkDate"
                    onChange={(e) => this.handleInputChange(e, index)}
                    value={value.endWorkDate}
                  ></input>
                </div>
                <div>
                  {this.state.allWork.length - 1 === index && (
                    <button
                      className="btn"
                      onClick={() => this.handleAddClick()}
                    >
                      +
                    </button>
                  )}
                  {this.state.allWork.length !== 1 && (
                    <button
                      className="btn"
                      onClick={() => this.handleRemoveClick(index)}
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="flex-col form-cont">
          <h5>Experience</h5>
          {this.state.allWork.map((value) => {
            return (
              <div key={uniqid()} className="flex-col form-cont form-mini">
                <h4>{value.position}</h4>
                <p>
                  {value.companyName} | {value.startWorkDate} -{" "}
                  {value.endWorkDate}
                </p>
                <p>{value.tasks}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Work;
