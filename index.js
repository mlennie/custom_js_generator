const generator = require("./generator")
const { dummySeq, factorialSeq } = require("./sequences")
const pipeSeq = require("./pipeSeq")
const { accumulator } = require("./pipes")

let seq
let i
let pipedSeq

// Sequence testing
console.log("Dummy Seq")
seq = generator(dummySeq)
for(i = 0; i < 6; i++) {
  console.log(seq.next())
}


console.log("FactorialSeq")
seq = generator(factorialSeq)
for(i = 0; i < 6; i++) {
  console.log(seq.next())
}

// Pipe testing
console.log("FactorialSeq with accumulator pipe")
pipedSeq = () => {
  return pipeSeq(factorialSeq)
           .pipeline(accumulator)
           .invoke()
}

seq = generator(pipedSeq)
for(i = 0; i < 6; i++) {
  console.log(seq.next())
}

