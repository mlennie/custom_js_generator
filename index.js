const { dummySeq, factorialSeq, fibonacciSeq } = require("./sequencers")
const pipeSeq = require("./pipeSeq")
const { accumulator } = require("./pipes")
const test = require("./testHelpers")

// Sequence testing
test(dummySeq, "Dummy Seq")
test(factorialSeq, "Factorial Seq")
test(fibonacciSeq, "Fibonaccie Seq")

// Pipe testing
let pipedSeq
pipedSeq = () => {
  return pipeSeq(factorialSeq)
           .pipeline(accumulator)
           .invoke()
}

test(pipedSeq, "FactorialSeq with accumulator pipe")

