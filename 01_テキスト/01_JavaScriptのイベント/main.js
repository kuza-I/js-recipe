// button 要素と click イベント

const button = document.getElementById("button")
const alertMessage = function() {
  alert("クリックしたね")
}

button.onclick = alertMessage // アラートが表示される

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const sayHello = function(e) {
  console.log(e.target.value)
}

inputText.oninput = sayHello
inputDate.oninput = sayHello

document.onkeydown = function(e) {
  console.log(e.key)
}
