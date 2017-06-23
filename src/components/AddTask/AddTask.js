import React, {Component} from 'react'
import TaskForm from '../TaskForm'
import { connect } from 'react-redux'

import './AddTask.css'

export const ADD_ACTION = 'ADD'

class AddTask extends Component {
    constructor(props) {
        super(props);

        this.formProps = {
          handleFormSubmit : this.handleFormSubmit,
          action: ADD_ACTION,
          submitText: 'ADD TASK'
        }
    }

    handleFormSubmit({title, description}) {
        //this.props.dispatch(addTask({title, description}));
    }

    render() {
        return (
            <div className="AddTask__container">
                <TaskForm {...this.formProps}/>
            </div>
        );
    }
}

export default connect(
    null
)(AddTask);