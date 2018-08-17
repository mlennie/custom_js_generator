const { dummySeq, factorialSeq, fibonacciSeq,
       rangeSeq } = require("./sequencers")
const pipeSeq = require("./pipeSeq")
const { accumulator } = require("./pipes")
const test = require("./testHelpers")

// Sequence testing
test("Dummy Seq", dummySeq)
test("Factorial Seq", factorialSeq)
test("Fibonaccie Seq", fibonacciSeq )
test("range Seq", rangeSeq, 2,3)

// Pipe testing
let pipedSeq
pipedSeq = () => {
  return pipeSeq(factorialSeq)
           .pipeline(accumulator)
           .invoke()
}

test("FactorialSeq with accumulator pipe", pipedSeq )

