const memoInputMust = document.getElementById("memo-inputMust")
const addButtonMust = document.getElementById("add-buttonMust")
const memoContainerMust = document.getElementById("memo-containerMust")

const memoInputMay = document.getElementById("memo-inputMay")
const addButtonMay = document.getElementById("add-buttonMay")
const memoContainerMay = document.getElementById("memo-containerMay")

//追加ボタン入力時、空欄でないならメモ追加。
addButtonMust.onclick = function() {
  if (memoInputMust.value !== "") {
    const card = addMemo(memoInputMust.value)
    memoContainerMust.append(card)
    memoInputMust.value = ""
  }
}

addButtonMay.onclick = function() {
  if (memoInputMay.value !== "") {
    const card = addMemo(memoInputMay.value)
    memoContainerMay.append(card)
    memoInputMay.value = ""
  }
}

const addMemo = function(text) {
  const card = document.createElement("div")
  card.className = "card"
  card.textContent = text

  const deleteButton = document.createElement("button")
  deleteButton.className = "delete"
  deleteButton.textContent = "削除"

  deleteButton.onclick = function() {
    card.remove()
  }
  card.append(deleteButton)
  return card
}
