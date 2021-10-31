new Vue({
  el: "#app",
  data: {
    haszandaka: false,
    inputMoney: 0,
    zandaka: 0,
    logs: [],
  },
  methods: {
    inMoney: function() {
      this.zandaka += Number(this.inputMoney)
      const now = new Date()
      this.logs.push({
        date: now,
        type: "入金",
        money: this.inputMoney,
      })
      this.inputMoney = ""
    },
    outMoney: function() {
      this.zandaka -= Number(this.inputMoney)
      const now = new Date()
      this.logs.push({
        date: now,
        type: "出金",
        money: this.inputMoney,
      })
      this.inputMoney = ""
    },
  },
})
