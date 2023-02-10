class Person {}

function factory<T extends new (...args: any[]) => any>(ctor: T): InstanceType<T> {
	return new ctor()
}

const p = factory(Person) // Person 类型

interface IPerson {
  name: string
  age: number
}

function printPerson(person: IPerson) {
}
const kobe = { name: "kobe", age: 30, height: 1.98 }
printPerson(kobe)


class Point<T = number> {
  x: T
  y: T
  constructor(x: T, y: T) {
    this.x = x
    this.y = y
  }
}

const p1 = new Point(10, 20)
console.log(p1.x)
const p2 = new Point("123", "321")
console.log(p2.x)
export {}