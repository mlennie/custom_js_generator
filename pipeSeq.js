module.exports = (sequencer, ...args) => {
  let x = sequencer(args)
  let pipes = []
  let iterator = {
    pipeline: (pipe) => {
      pipes.push(pipe())
      return iterator
    },
    invoke: () => {
      return () => {
        let n
        for(let i = 0; i < pipes.length; i++) {
          n = i === 0 ? pipes[i](x()) : pipes[i](n)
        }
        return n
      }
    }
  }
  return iterator
}

