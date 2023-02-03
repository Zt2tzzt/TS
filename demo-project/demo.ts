interface ILength {
  length: number
}

function getInfo(args: ILength) {
  return args
}

// 返回的结果 info1，info2，info3 类型为 any，类型丢失了
const info1 = getInfo("aaaa")
const info2 = getInfo(["aaa", "bbb", "ccc"])
const info3 = getInfo({ length: 100 })