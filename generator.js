// Generator
function generator(sequencer) {

  const iterator = {
    next: sequencer()
  }

  return iterator
}

// dummy seq
function dummySeq() {
  return function() {
    return "dummy"
  }
}

const seq = generator(dummySeq)
console.log(seq.next())
console.log(seq.next())
