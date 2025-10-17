import LocalStorageTaskRepository from './repositories/LocalStorageTaskRepository'
import TaskService from './service/TaskService'

const taskContainer = document.getElementById('taskContainer')
const doneTasksContainer = document.getElementById('doneTasksContainer')
const taskInput: HTMLInputElement | null = document.getElementById('taskInput') as HTMLInputElement
const taskAddBtn = document.getElementById('taskAddBtn')

const localStorageTaskRepository = new LocalStorageTaskRepository()
const taskService = new TaskService(taskContainer, localStorageTaskRepository, taskInput, taskAddBtn, doneTasksContainer)

taskService.renderCurrentTasks()
taskService.renderDoneTasks()
taskService.createAddTaskEvent()

localStorageTaskRepository.updateStatus('68bfbcad-d5a0-4d13-bbd3-e4f3108b50f0', true)
// MVC
// Model - TaskModel
// View - TaskComponent
// Controller - main.ts


fetch('http://localhost:5000/test')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })

fetch('http://localhost:5000/api/tasks')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })

fetch('http://localhost:5000/api/tasks/create', {
  method: 'POST',
  body: JSON.stringify({
    title: "Задача 6"
  }),
  headers: {
    "Content-Type": "application/json"
  }
})
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
