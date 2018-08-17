const generator = require("./generator")
module.exports = (name, sequencer, ...args) => {
  console.log(name)
  let seq = generator(sequencer, args)
  let results = []
  for(let i = 0; i < 10; i++) {
    results.push(seq.next())
  }
  console.log(results.join(" "))
}

