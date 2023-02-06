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
export {}