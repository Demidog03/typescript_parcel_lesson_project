import {Task} from "../models/TaskModel";

export interface UpdateTaskPayload {
    title: string
}

export interface TaskRepositoryInterface {
    get(id: string): Task | undefined
    getAll(): Task[]
    add(title: string): void
    remove(id: string): void
    update(id: string, updateTaskPayload: UpdateTaskPayload): void
}
