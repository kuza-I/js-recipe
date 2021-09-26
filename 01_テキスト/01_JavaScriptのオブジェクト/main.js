const hikakin = {
  name: "ヒカキン",
  age: 24,
  hobbies: ["ゲーム", "動画編集", "猫と遊ぶこと"],
  isHappy: true,
  address: {
    country: "日本",
    city: "東京",
  },
  sayHello: function() {
    console.log("ブンブンハロー YouTube")
  },
}

const kuzuha = {
  name: "葛葉",
  age: 100,
  like: ["ゲーム", "金", "甘いもの"],
  dislike: ["炎", "炎上", "苦いもの"],

  isHappy: true,
  profile: {
    height: 178,
    weight: 62,
    shoes: 27,
  },
  saySuperChat: function() {
    console.log("スーパーチャット、ありがとうございまーす！")
  },
}

console.log(hikakin.address)

console.log(kuzuha.like)

// 練習問題
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
hikakin.sayHello()
kuzuha.saySuperChat()
