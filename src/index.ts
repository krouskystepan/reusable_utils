import { mergeObjects } from './utils/object'

const obj1 = { a: 1, b: [1, 2] }
const obj2 = { b: { c: 3 } }
const result = mergeObjects(obj1, obj2)

console.log(result)
