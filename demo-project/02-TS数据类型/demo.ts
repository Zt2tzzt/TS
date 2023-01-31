// type TupleType = 

type FooType = {
  haha: string
  heihei: number
}

function foo(): void {
  return undefined
  // return 123 // 报错
}

function useState2<T>(state: T): [T, (newState: T) => void] {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }
  
  return [currentState, changeState]
}

const [title, setTitle] = useState2("abc") // title 的类型，根据 useState2 函数传的参数值类型发生变化。