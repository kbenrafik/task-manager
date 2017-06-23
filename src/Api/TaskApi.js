// TASK API

/**
 * Get list of tasks from server
 * @return {Promise}
 */
export const loadTaskList = () =>
    fetch('/tasks')
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.log('parsing failed', error))

/**
 * Create task
 * @param {Object} task - {title, description}
 * @return {Promise}
 */
export const createTask = task =>
    fetch('/task/create/' + task.title + '/' + task.description, {
        method: "POST"
    })
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.log('parsing failed', error))

/**
 * Delete task
 * @param {number} id - the id of task
 * @return {Promise}
 */
export const deleteTask = id =>
    fetch('/task/delete/' + id, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.log('parsing failed', error))

/**
 * Update task
 * @param {Object} task - {id, title, description}
 * @return {Promise}
 */
export const changeTask = task =>
    fetch('/task/update/' + task.id + '/' + task.title + '/' + task.description, {
        method: "PUT"
    })
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.log('parsing failed', error))