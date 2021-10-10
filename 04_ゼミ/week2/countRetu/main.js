const display = document.getElementById("display")
const dengen = document.getElementById("dengen")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const doubleButton = document.getElementById("double-button")

const rireki = document.getElementById("rireki")

const clickcheck = function() {
  const Div = document.createElement("div")
  Div.textContent = "and".repeat(count)
  rireki.appendChild(Div)
}

let count = 0
let onoff = false

dengen.onclick = () => {
  onoff = !onoff
  dengen.textContent = onoff ? "On" : "Off"
}

plusButton.onclick = function() {
  if (onoff) {
    count += 1
    display.textContent = count
    clickcheck
  }
}

minusButton.onclick = function() {
  if (onoff) {
    count -= 1
    display.textContent = count
    clickcheck
  }
}

doubleButton.onclick = function() {
  if (onoff) {
    count *= 2
    display.textContent = count
    clickcheck
  }
}
