import LocalStorageTaskRepository from './repositories/LocalStorageTaskRepository'

// instance -> экземпляр
const localStorageTaskRepository = new LocalStorageTaskRepository()

// localStorageTaskRepository.add({ id: 3, title: 'Task 3' })
// console.log(localStorageTaskRepository.getAll())
// localStorageTaskRepository.remove(4)
// localStorageTaskRepository.update(3, { title: 'Учить Next.js' })


// CRUD операции

// CREATE -> add() -> post запрос
// READ -> getAll() -> get запрос
// UPDATE -> update() -> put/patch запрос
// DELETE/DESTROY -> remove() -> delete запрос
