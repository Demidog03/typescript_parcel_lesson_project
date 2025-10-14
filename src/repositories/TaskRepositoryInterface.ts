import {Task} from "../models/TaskModel";

export interface UpdateTaskPayload {
    title: string
}

export interface TaskRepositoryInterface {
    get(id: string): Task | undefined
    getAll(): Task[]
    getDoneTasks(): Task[]
    getCurrentTasks(): Task[]
    add(title: string): void
    remove(id: string): void
    updateTitle(id: string, updateTaskPayload: UpdateTaskPayload): void
    updateStatus(id: string, newStatus: boolean): void
}
