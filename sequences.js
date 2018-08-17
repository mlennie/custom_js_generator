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
  }

}
