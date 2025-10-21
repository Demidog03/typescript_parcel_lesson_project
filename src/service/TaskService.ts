import {TaskRepositoryInterface} from '../repositories/TaskRepositoryInterface'
import TaskComponent from '../components/TaskComponent'
import MongoDBTaskRepository from "../repositories/MongoDBTaskRepository";

// Service/Controller - Что и как делать с данными (бизнес логика)
export default class TaskService {
  private taskContainer: HTMLElement | null
  private taskAddBtn: HTMLElement | null
  private taskInput: HTMLInputElement | null
  private repository: MongoDBTaskRepository
  private doneTasksContainer: HTMLElement | null

  constructor(
      taskContainer: HTMLElement | null,
      repository: MongoDBTaskRepository,
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

  async renderCurrentTasks() {
    if (this.taskContainer) {
      const currentTasks = await this.repository.getCurrentTasks()

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

  async renderDoneTasks() {
    if (this.doneTasksContainer) {
      const doneTasks = await this.repository.getDoneTasks()

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
      this.taskAddBtn.addEventListener('click', async () => {
        const newTaskTitle = this.taskInput?.value?.trim()

        if(newTaskTitle) {
          await this.repository.add(newTaskTitle)
          await this.renderCurrentTasks()
        }
      })
    }
  }

  async deleteTask(id: string) {
      await this.repository.remove(id)
      await this.renderDoneTasks()
      await this.renderCurrentTasks()
  }

  async updateTask(id: string, newTitle: string) {
      await this.repository.updateTitle(id, newTitle)
      await this.renderDoneTasks()
      await this.renderCurrentTasks()
  }

  async updateStatus(id: string, newStatus: boolean) {
      await this.repository.updateStatus(id, newStatus)
      await this.renderCurrentTasks()
      await this.renderDoneTasks()
  }
}
