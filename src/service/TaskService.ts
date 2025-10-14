import {TaskRepositoryInterface} from '../repositories/TaskRepositoryInterface'
import TaskComponent from '../components/TaskComponent'

// Service/Controller - Что и как делать с данными (бизнес логика)
export default class TaskService {
  private taskContainer: HTMLElement | null
  private taskAddBtn: HTMLElement | null
  private taskInput: HTMLInputElement | null
  private repository: TaskRepositoryInterface
  private doneTasksContainer: HTMLElement | null

  constructor(
      taskContainer: HTMLElement | null,
      repository: TaskRepositoryInterface,
      taskInput: HTMLInputElement | null,
      taskAddBtn: HTMLElement | null,
      doneTasksContainer: HTMLElement | null
  ) {
    this.taskContainer = taskContainer
    this.repository = repository
    this.taskInput = taskInput
    this.taskAddBtn = taskAddBtn
    this.doneTasksContainer = doneTasksContainer
  }

  renderCurrentTasks() {
    if (this.taskContainer) {
      const currentTasks = this.repository.getCurrentTasks()

      let currentTasksHtml: HTMLDivElement[] = []

      currentTasks.forEach((task) => {
        currentTasksHtml.push(
            TaskComponent({
              title: task.title,
              isDone: task.isDone,
              deleteTask: () => this.deleteTask(task.id),
              updateTask: (newTitle: string) => this.updateTask(task.id, newTitle),
              updateStatus: (newStatus: boolean)=> this.updateStatus(task.id, newStatus),
            }))
      })

      this.taskContainer.innerHTML = ''
      if (currentTasksHtml.length > 0) {
        this.taskContainer.append(...currentTasksHtml)
      }
      else {
        this.taskContainer.innerHTML = '<div>Нет задач</div>'
      }
    }
  }

  renderDoneTasks() {
    if (this.doneTasksContainer) {
      const doneTasks = this.repository.getDoneTasks()

      let doneTasksHtml: HTMLDivElement[] = []

      doneTasks.forEach((task) => {
        doneTasksHtml.push(
            TaskComponent({
              title: task.title,
              isDone: task.isDone,
              deleteTask: () => this.deleteTask(task.id),
              updateTask: (newTitle: string) => this.updateTask(task.id, newTitle),
              updateStatus: (newStatus: boolean)=> this.updateStatus(task.id, newStatus),
            }))
      })

      this.doneTasksContainer.innerHTML = ''
      if (doneTasksHtml.length > 0) {
        this.doneTasksContainer.append(...doneTasksHtml)
      }
      else {
        this.doneTasksContainer.innerHTML = '<div>Нет задач</div>'
      }
    }
  }

  createAddTaskEvent() {
    if (this.taskAddBtn) {
      this.taskAddBtn.addEventListener('click', () => {
        const newTaskTitle = this.taskInput?.value?.trim()

        if(newTaskTitle) {
          this.repository.add(newTaskTitle)
          this.renderCurrentTasks()
        }
      })
    }
  }

  deleteTask(id: string) {
    this.repository.remove(id)

    const task = this.repository.get(id)
    if (task?.isDone) {
      this.renderDoneTasks()
    }
    else {
      this.renderCurrentTasks()
    }
  }

  updateTask(id: string, newTitle: string) {
    this.repository.updateTitle(id, { title: newTitle })

    const task = this.repository.get(id)
    if (task?.isDone) {
      this.renderDoneTasks()
    }
    else {
      this.renderCurrentTasks()
    }
  }

  updateStatus(id: string, newStatus: boolean) {
    this.repository.updateStatus(id, newStatus)

    this.renderCurrentTasks()
    this.renderDoneTasks()
  }
}
