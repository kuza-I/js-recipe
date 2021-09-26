// * let キーワードを使って、hensu という名前の変数を宣言する
let hensu

// 変数には値を代入（割り当て）できる
hensu = 42
console.log(hensu)
// 変数には値を再代入できる
hensu = 100
console.log(hensu)
// * 多くの場合、変数には宣言と同時に値を代入する
let hensu2 = 42
console.log(hensu2)
// * const キーワードを使うと、定数になる
const teisu = 39

// 定数には値を再代入できない
//teisu = 100 // エラー
console.log(teisu)
// * 変数や定数の名前はだいたい自由に決められるが、-（ハイフン）が使えなかったり、最初の文字に数字が使えなかったりする
let namae
// let my-name // だめ
// let 1banme // だめ

// 複数の単語を組み合わせるときは、ふたつめ以降の単語の最初の文字を大文字にしてくっつけることが多い
// このような書き方をキャメルケースという（大文字がキャメル＝ラクダのこぶにみえることから）
let camelCase = "camelCase" // camel + case

console.log(camelCase)

let x = 3
let y = 6
let z = x ** y
console.log(z)

console.log(2 > 5 && 5 < 10)

let happiness = 95
let sleepiness = 35

let isHappy = happiness >= 90
let isSleepy = sleepiness >= 90

let isHappyAndSleepy = isHappy && isSleepy
// 幸せかつ眠いかどうか
console.log(isHappyAndSleepy) // false

sleepiness = 92
isSleepy = sleepiness >= 90

isHappyAndSleepy = isHappy && isSleepy
console.log(isHappyAndSleepy) // true
