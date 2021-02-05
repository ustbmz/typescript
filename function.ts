// 函数！
// 函数增加返回类型
function add(a: number, b: number): number {
  return a + b
}
const c = add(1, 2)

// 返回空
function hello(): void {
  console.log('hello ')
}

// 永远不会执行完成的函数
function errorEmitter(): never {
  throw new Error()
}

// 解构赋值 增加类型
function test({ first, second }: { first: number; second: number }): number {
  return first + second
}

// 写函数的两种方式

const add2 = (str: string): number => {
  return parseInt(str, 10)
}
// 简化返回类型
const add2Simple = (str: string) => {
  return parseInt(str, 10)
}

const add3: (str: string) => number = (str) => {
  return parseInt(str)
}

//其他的case

interface Person {
  name: string
}

const rawdata = '"name":"dell"'
const dell: Person = JSON.parse(rawdata)

// 类型变动
let temp: number | string = 123
temp = '123'

