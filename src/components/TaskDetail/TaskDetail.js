import React, { Component } from 'react'
import { removeTask, updateTask } from '../../actions'
import { connect } from 'react-redux'
import TaskType from '../../Types/TaskType'
import TaskForm from '../TaskForm'
import cross from './cross.svg'
import edit from './edit.svg'
import './TaskDetail.css'

class TaskDetail extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isDescriptionOpened : false,
        isFormUpdateOpened: false
      }

      this.formProps = {
          handleFormSubmit : this.changeTask,
          action: 'UPDATE_TASK',
          submitText: 'UPDATE TASK',
          title: this.props.title,
          description: this.props.description
        }
    }

  openDescription = (event) => {
    this.setState({
        isDescriptionOpened: !this.state.isDescriptionOpened
    });
  }

  openUpdateForm = (event) => {
    this.setState({
        isFormUpdateOpened: !this.state.isFormUpdateOpened
    });
  }
  
  renderDescription = () => {
    if(!this.state.isDescriptionOpened) {
      return null;
    }
    return <p className="TaskDetail__description">{this.props.description}</p>
  }

  deleteTask = () => {
    console.log()
    this.props.dispatch(removeTask(this.props.id))
  }

  changeTask = (state) => {
    const task = {
      id: this.props.id,
      ...state
    };
    this.props.dispatch(updateTask(task))
    this.setState({
        isFormUpdateOpened: false,
    });
  }

  renderUpdateTaskForm () {    
    if(!this.state.isFormUpdateOpened) {
      return null;
    }
    return <TaskForm {...this.formProps}/>
  }

  render() {
    return (
        <div className="TaskDetail__container">
            <div className="TaskDetail__header">
              <h3 className="TaskDetail__header--title" onClick={this.openDescription}>{this.props.title}</h3>
              <div className="TaskDetail__header--crud">
                <img
                  onClick={this.openUpdateForm}
                  className="TaskDetail__header--edit"
                  src={edit}
                  alt="Update task"
                  width="28"
                  height="28"/>
                <img
                  onClick={this.deleteTask}
                  className="TaskDetail__header--delete"
                  src={cross} 
                  alt="Delete task" 
                  width="24" 
                  height="24"/>
              </div>
            </div>
            {this.renderDescription()}
            {this.renderUpdateTaskForm()}
        </div>
    );
  }
}

TaskDetail.propTypes = TaskType;

export default connect(
    null
  )(TaskDetail);
