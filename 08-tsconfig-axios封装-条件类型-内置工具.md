# tsconfig.json 文件

1.是什么？

2.有什么用？

3.配置

4.顶层选项

5.compilerOptions 常见选项

# axios 封装

导入实例类型，config 类型

给 Promise 中处理的逻辑，添加类型。

# 条件类型

1.基本用法

重构函数重载的案例。

2.类型推断

内资工具 ReturnType 的使用。

封装一个自己的 ReturnType 工具，infer 关键词的使用

使用 infer 推断参数的类型。

3.分发

# 内置工具

1.Partial\<Type\>

自己实现

2.Required\<Type\>

自己实现

3.ReadOnly\<Type\>

自己实现

4.Record<Keys, Type>

keyof 关键字作用域对象类型

in 关键字作用域联合类型。

确保一定是联合类型，怎么写？

- Keys extends keyof any

5.Pick<Type, Keys>

自己实现

6.Omit<Type, Keys>

自己实现

7.Exclude<UnionType, ExcludedMembers>

自己实现，使用分发

8.Extract<Type, Union>

自己实现，使用分发。

9.NonNullable\<Type\>

自己实现

10.ReturnType\<Type\>

常用于通用的创建实例的构造函数。

typeof Person 拿到的是构造器类型而构造器创建出来的实例类型，就是类的类型，如 Person

自己实现，用到了类型推断。


1.tsconfig.json 文件
2.axios 封装
3.条件类型
4.内置工具
