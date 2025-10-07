import {Task} from "../models/TaskModel";

export interface UpdateTaskPayload {
    title: string
}

export interface TaskRepositoryInterface {
    getAll(): Task[]
    add(newTask: Task): void
    remove(id: number): void
    update(id: number, updateTaskPayload: UpdateTaskPayload): void
}
