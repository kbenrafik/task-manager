import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames';

import { addTask } from '../../actions'
import { ADD_ACTION } from '../AddTask/AddTask'

import './TaskForm.css'

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // this.props.handleFormSubmit(this.state);
        if(this.props.action === ADD_ACTION) {
            this.props.dispatch(addTask({title:this.state.title, description:this.state.description}));
        }
        this.props.handleFormSubmit(this.state)

        this.setState({
            title: '',
            description: ''
        });
    }

    containerClassName = () => classnames(
        'TaskForm__container',
        { 'TaskForm__container-update': this.props.action === 'UPDATE_TASK' }
    );

    render() {
        return (
            <form
                className={this.containerClassName()}
                action={this.props.action}
                onSubmit={this.handleSubmit}>
                <input
                    className="TaskForm__input TaskForm__input--text"
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleChange} />
                <input
                    className="TaskForm__input TaskForm__input--description"
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleChange} />                    
                <div className="TaskForm__submit">
                    <input
                        className="TaskForm__input--submit"
                        type="submit"
                        value={this.props.submitText}/>
                </div>
            </form>
        );
    }
}

export default connect(
    null
  )(TaskForm);