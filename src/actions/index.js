
import { loadTaskList, createTask, deleteTask, changeTask } from '../Api/TaskApi'
export const ADD_TASK = 'ADD_TASK'
export const LOAD_TASKS = 'LOAD_TASKS'
export const DELETE_TASK = 'DELETE_TASKS'

const loadTasks = tasks => ({
  type: LOAD_TASKS,
  tasks
});

const dispatchLoadTasks = dispatch =>
  loadTaskList()
    .then(response => {
      dispatch(loadTasks(response.tasks))
    }).catch(error => {
      throw (error);
    });

export const retrieveTasks = () => {
  return (dispatch) => {
    return loadTaskList()
      .then(response => {
        dispatch(loadTasks(response.tasks))
      }).catch(error => {
        throw (error);
      });
  };
}

export const addTask = task => {
  return function (dispatch) {
    return createTask(task).then(dispatchLoadTasks(dispatch))
  };
}

export const removeTask = id => {
  return function (dispatch) {
    return deleteTask(id).then(dispatchLoadTasks(dispatch))
  };
}

export const updateTask = task => {
  return function (dispatch) {
    return changeTask(task).then(dispatchLoadTasks(dispatch))
  };
}