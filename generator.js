// Generator
function generator(sequencer) {

  const iterator = {
    next: sequencer()
  }

  return iterator
}

let seq
let i

// Dummy seq
function dummySeq() {
  let i = 0
  return function() {
    return i++
  }
}

console.log("Dummy Seq")
seq = generator(dummySeq)
seq = generator(dummySeq)
for(i = 0; i < 6; i++) {
  console.log(seq.next())
}


function factorialSeq() {
  let i = 0
  let n = 1
  return function() {
    if (i === 0) {
      i++
      return n
    } else {
      n = n * i
      i++
      return n
    }
  }
}

console.log("FactorialSeq")
seq = generator(factorialSeq)
for(i = 0; i < 6; i++) {
  console.log(seq.next())
}

