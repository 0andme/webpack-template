import { checkType } from "./utils/checkType"
import "./scss/main.scss"
const a = 1
const abc = () => {
    console.log(a)
}
const b = [1, 2, 3]
console.log(b.includes(2))

console.log("checkType",checkType())

