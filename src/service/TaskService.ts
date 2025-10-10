import {TaskRepositoryInterface} from '../repositories/TaskRepositoryInterface'
import TaskComponent from '../components/TaskComponent'

// Service/Controller - Что и как делать с данными (бизнес логика)
export default class TaskService {
  private taskContainer: HTMLElement | null
  private taskAddBtn: HTMLElement | null
  private taskInput: HTMLInputElement | null
  private repository: TaskRepositoryInterface

  constructor(
      taskContainer: HTMLElement | null,
      repository: TaskRepositoryInterface,
      taskInput: HTMLInputElement | null,
      taskAddBtn: HTMLElement | null
  ) {
    this.taskContainer = taskContainer
    this.repository = repository
    this.taskInput = taskInput
    this.taskAddBtn = taskAddBtn
  }

  renderTasks() {
    if (this.taskContainer) {
      const allTasks = this.repository.getAll()

      let allTasksHtml = ''

      allTasks.forEach((task) => {
        allTasksHtml += TaskComponent(task.title)
      })

      this.taskContainer.innerHTML = allTasksHtml
    }
  }

  createAddTaskEvent() {
    if (this.taskAddBtn) {
      this.taskAddBtn.addEventListener('click', () => {
        const newTaskTitle = this.taskInput?.value?.trim()

        if(newTaskTitle) {
          this.repository.add(newTaskTitle)
          this.renderTasks()
        }
      })
    }

  }
}
