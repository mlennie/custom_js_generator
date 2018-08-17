///////////////////////
// Generator
///////////////////////
function generator(sequencer) {

  return {
    next: sequencer()
  }
}

///////////////////////
// Sequences
///////////////////////
let seq
let i

// Dummy seq
function dummySeq() {
  let i = 0
  return () => {
    return i++
  }
}

console.log("Dummy Seq")
seq = generator(dummySeq)
for(i = 0; i < 6; i++) {
  console.log(seq.next())
}


function factorialSeq() {
  let i = 0
  let n = 1
  return () => {
    n *= i || 1
    i++
    return n
  }
}

console.log("FactorialSeq")
seq = generator(factorialSeq)
for(i = 0; i < 6; i++) {
  console.log(seq.next())
}

///////////////////////
// PipedSeq
///////////////////////

let pipedSeq
function pipeSeq(sequencer) {

  let x = sequencer
  let pipes = []
  let iterator = {
    pipeline: (pipe) => {
      pipes.push(pipe)
      return iterator
    },
    invoke: () => {
      return () => {
        let n
        for(let i = 0; i < pipes.length; i++) {
          n = i === 0 ? pipes[i]()(x()()) : pipes[i]()(n)
        }
        return n
      }
    }
  }
  return iterator

}


///////////////////////
// Pipes
///////////////////////

function accumulator() {
  let sum = 0
  return (value) => {
    sum += value
    return sum
  }
}

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

