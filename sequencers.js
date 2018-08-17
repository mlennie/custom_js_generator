const isPrime = (input) => {
    let prime = true
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) {
            prime = false;
            break;
        }
    }
    return prime && (input > 1);
}

const findNextPrime = (currentPrime) => {
  const newPrime = currentPrime + 1
  return isPrime(newPrime) ? newPrime : findNextPrime(newPrime)
}

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

  },

  primeSeq: () => {
    let nextPrime = 2
    let currentPrime
    return () => {
      currentPrime = nextPrime
      nextPrime = findNextPrime(currentPrime)
      return currentPrime
		}
  },

  partialSumSeq: (args) => {
    let i = 0
    let sum = 0
    return () => {
      if (i >= args.length) {
        return "error"
      } else {
        sum += args[i]
        i++
        return sum
      }
    }
  }

}
