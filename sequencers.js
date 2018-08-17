module.exports = {

  dummySeq: () => {
    let i = 0
    return () => {
      return i++
    }
  },

  factorialSeq: () => {
    let i = 0
    let n = 1
    return () => {
      n *= i || 1
      i++
      return n
    }
  },

  fibonacciSeq: () => {
    let [prev, curr] = [0,1]
    return () => {
      [prev, curr] = [curr, prev + curr]
      return prev
    }

  },

  rangeSeq: (args) => {
    let start = args[0] // start
    let step = args[1] // step
    let x
    return () => {
      x = start
      start += step
      return x
    }

  }

}
