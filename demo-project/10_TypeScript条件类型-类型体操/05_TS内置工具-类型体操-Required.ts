interface IKun {
  name: string
  age: number
  slogan?: string
}

type IKunRequired = Required<IKun>

// 类型体操
type HYRequired<T> = {
  [P in keyof T]-?: T[P] 
}


// IKun都变成可选的
type IKun2 = Required<IKun>


export {}
