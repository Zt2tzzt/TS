class Person {}

function factory<T extends new (...args: any[]) => any>(ctor: T): InstanceType<T> {
	return new ctor()
}

const p = factory(Person) // Person 类型

export {}