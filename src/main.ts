// let num1: number = 10
// let firstName: string = 'Yevgeniy'
// let isStudent: boolean = true
//
// let gender: 'male' | 'female' | 'other' = 'male'
//
// console.log(num1)
// console.log(firstName)
// console.log(isStudent)
// console.log(gender)


// const numbers: number[] = [1, 2, 3, 4, 5]
// const numbers: Array<number> = [1, 2, 3, 4, 5]
// const array1: (number | string)[] = [1, '2', 3, '4', 5, 'text']
// array1.push(6)
// array1.push('text2')

// const array1: Array<number | string> = [1, '2', 3, '4', 5, 'text']
// array1.push(6)
// array1.push('text2')
//
// console.log(array1)


// const readonlyArray: ReadonlyArray<number> = [1, 2, 3, 4, 5]
// // readonlyArray.push() // не удается
// //
// // console.log(readonlyArray)

// let matrix: number[][] = [
//     [1, 2, 3], // 0
//     [4, 5, 6], // 1
//     [7, 8, 9], // 2
//     [10]
// ];
//
// console.log(matrix[0][2])
// console.log(matrix)

// TUPLES
// let threeStudents: readonly [string, number, boolean] = ['Yevgeniy', 10, true]
// threeStudents.push('Ivan')

// console.log(threeStudents)


// OBJECTS
// type StringOrNumber = string | number
// type StudentNames = 'Yevgeniy' | 'Ivan' | 'Oleg' | 'Alija' | 'Nastya'
//
// let num1: StringOrNumber = '10'
// let student1: StudentNames = 'Oleg'

// type Student = {
//     readonly name: string
//     age: number
//     speciality: 'Front-end' | 'Back-end'
//     isMarried?: boolean
// }

// Обьект или Классом
// interface Student {
//     readonly name: string
//     age: number
//     speciality: 'Front-end' | 'Back-end'
//     isMarried?: boolean
// }

// type ReadonlyStudent = Readonly<Student>
//
// const student1: ReadonlyStudent = {
//     name: 'Genrih',
//     age: 25,
//     speciality: 'Front-end',
//     isMarried: true
// }
//
// const student2: Student = {
//     name: 'Artem',
//     age: 26,
//     speciality: 'Back-end'
// }
//
// // student1.age = 27
// // student1.name = '' // Нельзя менять
//
// student2.isMarried = true

// type Car = {
//     model: string
//     color: string
// }
//
// type CarWithEngine = {
//     engine: string
// } & Car
//
// // interface Car {
// //     model: string
// //     color: string
// // }
// //
// // interface CarWithEngine extends Car {
// //     engine: string
// // }
//
// const car1: Car = {
//     model: 'BMW',
//     color: 'red'
// }
//
// const car2: CarWithEngine = {
//     model: 'BMW',
//     color: 'red',
//     engine: 'V12'
// }

// type MultiplyFunction = (num1: number, num2?: number) => number
//
// const multiply: MultiplyFunction = (num1, num2?) => {
//     if (num2 !== undefined) {
//         return num1 * num2
//     }
//     return num1
// }
//
// multiply(10)

function sayHello(name: unknown): void {
    console.log(`Hello, ${name}`)
}

sayHello(true)
