//localstrageで前のデータを保存できるよ
const memo = "おにぎり"

localStorage.memo = memo
const anothermemo = localStorage.memo

console.log(memo)
console.log(anothermemo)

//localstrageは文字列だけ保存できる
const memos = ["リンゴ", "バナナ", "ぶどう"]

localStorage.memos = memos
const anothermemos = localStorage.memos

console.log(memos)
//anothermemosは文字列としてしか認識されない(配列で保存されない)
console.log(anothermemos)

//JSONを使えば文字列とかでも行ける？
localStorage.JsonMemos = JSON.stringify(memos)
console.log(JSON.stringify(memos))

//JSONファイルをオブジェクト形式に戻すためのJSON.parse()をつかう
console.log(JSON.parse(localStorage.JsonMemos))
