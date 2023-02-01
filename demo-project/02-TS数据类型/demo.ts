// type TupleType = 

function useState2<T>(state: T): [T, (newState: T) => void] {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }
  
  return [currentState, changeState]
}

const [title, setTitle] = useState2("abc") // title 的类型，根据 useState2 函数传的参数值类型发生变化。

const arr = [123, 'haha', true]

let abc: string

/* console.log('abc:', abc)

function add(arg1: number|string, arg2: number|string) {
  return arg1 + arg2
} */

class Person {

  constructor(public name: string, private age: number) {
    this.name = name
    this.age = age
  }

}

const p = new Person('zzt', 18)
console.log(p.name)

