import {TaskRepositoryInterface, UpdateTaskPayload} from "./TaskRepositoryInterface";
import {Task} from "../models/TaskModel";

export default class LocalStorageTaskRepository implements TaskRepositoryInterface {
    constructor() {}

    // Домашнее задание
    // get(id: number): Task {
    //
    // }

    getAll(): Task[] {
        return this.getParsedTasks()
    }
    add(newTask: Task): void {
        // localStorage.getItem('tasks') => "[{ "id": 1, "title": "Task 1" }, { "id": 2, "title": "Task 2" }]"
        // JSON.parse() => [{ "id": 1, "title": "Task 1" }, { "id": 2, "title": "Task 2" }]
        // localStorage.getItem('tasks') === null => '[]'
        // tasks = [{ "id": 1, "title": "Task 1" }, { "id": 2, "title": "Task 2" }] || []
        // tasks = [{ "id": 1, "title": "Task 1" }, { "id": 2, "title": "Task 2" }, { "id": 3, "title": "Task 3" }]
        // updatedTasksJson => JSON.stringify(tasks) => "[{ "id": 1, "title": "Task 1" }, { "id": 2, "title": "Task 2" }, { "id": 3, "title": "Task 3" }]"
        // localStorage.setItem('tasks', updatedTasksJson) => "[{ "id": 1, "title": "Task 1" }, { "id": 2, "title": "Task 2" }, { "id": 3, "title": "Task 3" }]"
        const tasks: Task[] = this.getParsedTasks()
        const isTaskExists: boolean = tasks.some((task) => task.id === newTask.id)

        if (isTaskExists) {
            return
        }

        tasks.push(newTask)
        const updatedTasksJson = this.getStringifiedItem(tasks)
        localStorage.setItem('tasks', updatedTasksJson)

        // serialization - Сериализация - процесс конвертирования данных из базы
        // python -> dict
        // js -> object
        // java -> hashmap
        // c# -> dictionary
    }
    remove(id: number): void {
        const tasks = this.getParsedTasks()
        const hasDeletingTask = tasks.some((task) => task.id === id)

        if (!hasDeletingTask) {
            console.log('Невозможно удалить Неправильный ID')
            return
        }

        const updatedTasks = tasks.filter(task => task.id !== id)
        localStorage.setItem('tasks', this.getStringifiedItem(updatedTasks))
    }
    update(id: number, newTaskPayload: UpdateTaskPayload): void {
        const tasks = this.getParsedTasks()
        const taskToUpdate = tasks.find(task => task.id === id)

        if (!taskToUpdate) {
            console.log('Задача не найдена. Невозможно обновить')
            return
        }

        taskToUpdate.title = newTaskPayload.title
        localStorage.setItem('tasks', this.getStringifiedItem(tasks))
    }

    private getParsedTasks(): Task[] {
        return JSON.parse(localStorage.getItem('tasks') || '[]')
    }
    private getStringifiedItem<T>(item: T): string {
        return JSON.stringify(item)
    }
}
