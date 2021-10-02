const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 == 0) {
      console.log(n + "!!!!!!!!")
    } else {
      console.log(n)
    }
  }
}

const FizzBuzz = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 15 == 0) {
      console.log("FizzBuzz")
    } else if (n % 5 == 0) {
      console.log("Buzz")
    } else if (n % 3 == 0) {
      console.log("Fizz")
    } else {
      console.log(n)
    }
  }
}

const nabeatuFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    let thisString = n.toString()
    if (n % 3 == 0 || thisString.indexOf("3") >= 0) {
      console.log(n + "!!!!!!!!")
    } else {
      console.log(n)
    }
  }
}
