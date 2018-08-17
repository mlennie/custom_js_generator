const generator = require("./generator")
module.exports = (sequencer, name) => {
  console.log(name)
  let seq = generator(sequencer)
  let results = []
  for(let i = 0; i < 6; i++) {
    results.push(seq.next())
  }
  console.log(results.join(" "))
}

