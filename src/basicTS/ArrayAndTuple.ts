// 数组
const arr: (number | string)[] = [1, 2, '3']
const strArr: string[] = ['1', '2']

// 对象数组类型
type User = {
  name: string
  age: number
}

interface Teacher {
  name: string
  age: number
}

const objectArr: User[] = [
  {
    name: 'dell',
    age: 26,
  },
]

const classArr1: Teacher[] = [
  {
    name: 'dell',
    age: 26,
  },
]

const classArr2: Teacher[] = [
  {
    name: 'dell',
    age: 26,
  },
]

// 元组
const tupleArr: [string, string, string, number] = ['123', '321', '321', 456]
const tupleList: [string, string, number][] = [
  ['123', '321', 456],
  ['123', '321', 456],
  ['123', '321', 456],
]
// 这样的类型定义就叫元组

// interface 接口
// 问号代表这个参数可以没有,没有的情况也可以通过类型校验
interface Person {
  name: string
  age?: number
  readonly sex?: string
}

// 一个类实现一个接口
class UserClass implements Person3 {
  name: 'user',
  age: 16,
  sex: 'man',
  
  say() {
    return 'hello from class'
  }
}
type Person2 = string
// type 和 interface 的区别
// interface 只能是一个函数或者是一个对象

const getPersonName = (person: Person) => {
  console.log(person.name)
}

const setPersonName = (person: Person, name: string) => {
  person.name = name
}

const jack = {
  name: 'dell'
}

getPersonName(jack)
setPersonName(jack, 'jack')

//对象自变量的直接赋值  强校验规则
//当传入参数不是一个变量的时候，typescript会进行强校验
getPersonName({
  name: 'dell',
  fuck: 'hei',
})

//propsName 可以是string类型的任何值
interface Person3 {
  name: string
  age?: number
  readonly sex?: string
  [propsName: string]: any
  say(): string
}

// interface 的继承
interface Teacher2 extends Person3 {
  teach(): string
}

const getPersonName2 = (person: Teacher2) => {
  console.log(person.name)
}
getPersonName2({
  name: 'dell',
  fuck: 'u',
  suck: 123,
  say() {
    return 'hello u look what'
  },
  teach() {
    return 'english'
  },
})
