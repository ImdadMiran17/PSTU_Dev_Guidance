const num = parseInt(prompt())

for (let i = 0; i < num; i++) {
  if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) console.log("FizzBuzz")
  else if ((i + 1) % 3 === 0) console.log("Fizz")
  else if ((i + 1) % 5 === 0) console.log("Buzz")
  else if ((i + 1) % 3 !== 0 && (i + 1) % 5 !== 0) console.log(i + 1)
}
