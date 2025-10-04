// function customMap<T, U>(arr: T[], callbackFn: (element: T) => U): U[] {
//     const newArr = []
//     for (const el of arr) {
//         newArr.push(callbackFn(el)) // newArr.push(el * 2)
//     }
//     return newArr
// }
//
// const numbers: number[] = [1, 2, 3, 4, 5]
// const numbers2 = customMap<number, number>(numbers, (el) => el + 1)
// const numbers3 = customMap(numbers, (el) => el + 'hi')
// T = number
// U = string


// customMap<number, boolean>(numbers: number[], callbackFn: (element: number) => booleab): boolean[]
// T = number
// U = boolean

// console.log(numbers)
// console.log(numbers2)
// console.log(numbers3)

// GENERIC

// function myArray(T) {
//     return [T]
// }
// type MyArray<T> = T[]
// MyArray<number> = number[]
//
// const array1: MyArray<number> = [1, 2, 3, 4, 5]
// const array2: MyArray<string> = ['a', 'b', 'c', 'd', 'e']
// const array3: MyArray<boolean> = [true, false, true, false, true]
// const array4: MyArray<MyArray<number>> = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const array5: MyArray<any> = [1, 'a', true, [1, 2, 3]]

// function sum<T, U>(el1: T, el2: U): unknown {
//     return (el1 as any) + (el2 as any);
// }
//
// const result1 = sum(1, undefined)
//
// if (typeof result1 === 'number') {
//     console.log('Это число')
//     console.log(result1)
// }
//
// if (typeof result1 === 'string') {
//     console.log('Это строка')
//     console.log(result1)
// }

interface Image {
    id: string
    link: string
}

interface User {
    id: string
    email: string
}

const user: User = {
    id: 'gfdgnfdoing16135131',
    email: 'user@mail.ru'
}

const users: User[] = [
    {
        id: '123',
        email: 'user1@mail.ru'
    },
    {
        id: '456',
        email: 'user2@mail.ru'
    },
    {
        id: '789',
        email: 'user3@mail.ru'
    }
]

interface Response<DATA> {
    data: DATA | null
    status: number
    message?: string
    error?: string
}

const response1: Response<User> = {
    data: user,
    status: 200,
    message: 'Пользователь получен',
}

const response2: Response<User[]> = {
    data: users,
    status: 200,
    message: 'Пользователи получены',
}

const response3: Response<null> = {
    data: null,
    status: 404,
    error: 'Данные не найдены',
}

const response4: Response<Image> = {
    data: {
        id: 'image1',
        link: 'https://some-images/image1'
    },
    status: 200,
    message: 'Картинка получена'
}

console.log(response1.data?.id)
response2.data?.map(user => console.log(user.email))
response3.data
response4.data?.link
