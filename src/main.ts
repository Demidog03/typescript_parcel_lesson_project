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

// function sayHello(name: unknown): void {
//     console.log(`Hello, ${name}`)
// }
//
// sayHello(true)

// const numbers = [1, 2, 3, 4, 5]
// const numbersClone = numbers.map(el => {
//     return el
// })
// const numbersCloneChanged = numbers.map(el => {
//     return el * 2
// })
//
// console.log(numbers)
// console.log(numbersClone)
// console.log(numbersCloneChanged)
//
// map(arr, func)

// 1
// any - абсолютно все что угодно (делай что хочешь)
// unknown - пока не знаю что за типы, но когда буду знать буду ругаться
// function customMap(arr: any[], callbackFn: (element: any) => any): any[] {
//     const newArr = []
//     for (const el of arr) {
//         newArr.push(callbackFn(el)) // newArr.push(el * 2)
//     }
//     return newArr
// }
//
// const numbers = [1, 2, 3, 4, 5]
// const newNumbers = customMap(numbers, (el) => {
//     return el * 2
// })
//
// console.log(numbers)
// console.log(newNumbers)

// type CallbackArrayFunc = (element: unknown) => unknown
// () => (тип данных которую возвращает функция)

// 2
// function customMap(arr, callbackFn) {
//     const newArr = []
//     for (const el of arr) {
//         newArr.push(callbackFn(el))
//     }
//     return newArr
// }


// Array.prototype.customMap = function (callbackFn) {
//     const newArr = []
//     for (const el of this) {
//         newArr.push(callbackFn(el))
//     }
//     return newArr
// }
//
// const numbers = [1, 2, 3, 4, 5]
// const newNumbers = numbers.customMap(el => {
//     return el * 2
// })
//
// console.log(numbers)
// console.log(newNumbers)

// Создать кастомный reduce()

// КЛАССЫ И ИНТЕРФЕЙСЫ
// type Car = {
//     model: string
//     color: string
// }
//
// type CarWithEngine = {
//     engine: string
// } & Car

// interface Car {
//     model: string
//     color: string
// }
//
// interface CarWithEngine extends Car {
//     engine: string
// }
//
// const car1: CarWithEngine = {
//
// }

// interface DogInterface {
//     name: string
//     bark: () => void
// }
//
// class Dog implements DogInterface{
//     name: string
//
//     constructor(name: string) {
//         this.name = name
//     }
//
//     bark(): void {
//         console.log(`Woof!`)
//     }
// }
//
// const dog = new Dog('Max')
// console.log(dog)
// dog.bark()

// const dog: DogInterface = {
//     name: 'Max',
//     bark: () => {
//         console.log(`Woof!`)
//     },
//     age: 12

// }

interface BankAccountInterface {
    deposit(amount: number): void
    withdraw(amount: number): void
    showBalance(): void
}

class BankAccount implements BankAccountInterface {
    private balance: number = 0

    deposit(amount: number): void {
        this.addBalance(amount)
        this.balance = this.balance + amount
        console.log(`Начислено ${amount}$`)
        this.showBalance()
    }
    withdraw(amount: number): void {
        this.decreaseBalance(amount)
        this.balance = this.balance - amount
        console.log(`Снятие ${amount}$`)
        this.showBalance()
    }
    showBalance(): void {
        console.log(`Текущий баланс: ${this.balance}$`)
    }

    private addBalance(amount: number) {
        this.balance = this.balance + amount
    }
    private decreaseBalance(amount: number) {
        if (amount > this.balance) {
            console.log('Недостаточно средств')
            return
        }
        this.balance = this.balance - amount
    }
}


const bankAccount = new BankAccount()
bankAccount.deposit(100)
bankAccount.withdraw(20)

bankAccount.showBalance()
