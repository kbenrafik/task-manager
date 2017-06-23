import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskDetail from '../TaskDetail'
import TaskType from '../../Types/TaskType'
import { connect } from 'react-redux'
import './TaskList.css';

const renderTaskItems = (items) => {
    if(items.length) {
      return items.map((item)=> 
        <TaskDetail key={item.id} {...item} isRequired={item}/>
      );
    }

    return <p>There is no task, be happy.</p>
  }

class TaskList extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
        <div className="TaskList__container">
            <h2 className="TaskList__title">Tasks list</h2>
            {renderTaskItems(this.props.taskItems)}
        </div>
    );
  }
}

TaskList.propTypes = {
  taskItems: PropTypes.arrayOf(TaskType)
};


const mapStateToProps = state => {
  return {
    taskItems: state.tasks
  }
}

export default connect(
    mapStateToProps
  )(TaskList);
