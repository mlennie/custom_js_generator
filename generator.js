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

  let pipes = []
  return {
    pipeline: (pipe) => {
      pipes.push(pipe)
      return pipeSeq(sequencer)
    },
    invoke: () => {
      let n
      for(let i = 0; i < pipes.length; i++) {
        n = i === 0 ? pipes[i](sequencer()) : pipes[i](n)
        /*
        if (i===0) {
          n = pipes[i](sequencer())
        } else {
          n = pipes[i](n)
        }*/
      }
      return () => {return n}
    }
  }

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
pipedSeq = pipeSeq(factorialSeq)
             .pipeline(accumulator)
             .invoke()
seq = generator(pipedSeq)
for(i = 0; i < 6; i++) {
  console.log(seq.next())
}

