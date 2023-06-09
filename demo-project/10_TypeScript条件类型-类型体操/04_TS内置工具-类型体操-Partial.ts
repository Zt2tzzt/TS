interface IKun {
  name: string
  age: number
  slogan?: string
}
type IKunOptional1 = Partial<IKun>

// 类型体操
type HYPartial<T> = {
  [P in keyof T]?: T[P]
}

// IKun都变成可选的
type IKunOptional = HYPartial<IKun>

export {}
