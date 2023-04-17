//String Functions
let string = "Name : Ali Ahmed RegNO: Fa20-BCS-071"

// indexof Function
var position = string.indexOf("d")
console.log(position)


// indexof Function
position = string.lastIndexOf("071")
console.log(position)


// Slice and Substring
position = string.slice(7,16)
console.log(position)
position = string.substring(7,16)
console.log(position)

// length
console.log(string.length)

// Replace
position = string.replace("Ali Ahmed",  "Kashif")
console.log(position)

// Uppercase And Lower Case
console.log(string.toUpperCase())
console.log(string.toLowerCase())

// Concat
var str = " Class : BCS6A"
console.log(string.concat(str))

// Trim remoes extra spaces in the sentence
console.log(string.trim())

// Char at
console.log(string.charAt(2))

// CharCodeAt()
console.log(string.charCodeAt(0))

