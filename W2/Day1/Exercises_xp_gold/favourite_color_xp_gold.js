// Exercise 1

let me = ["my","favorite","color","is","blue"]

let me_together = me.join("")

console.log(me_together)



// Exercise 2

let str1 = "mix"
let str2 = "pod"

let new_str1 = str1.replace("x", "d")
let new_str2 = str2.replace("d", "x")

console.log(new_str1)
console.log(new_str2)


// better way of doing the same thing

let new_str1_another_way = str1.replace(str1[-1], str2[2])
let new_str2_another_way = str2.replace(str2[2], str1[2])

console.log(new_str1_another_way)
console.log(new_str2_another_way)