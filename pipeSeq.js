module.exports = (sequencer, ...args) => {
  let x = sequencer(args)
  let pipes = []
  let options = {
    pipeline: (pipe) => {
      pipes.push(pipe())
      return options
    },
    invoke: () => {
      return () => {
        return () => {
          let n
          for(let i = 0; i < pipes.length; i++) {
            n = i === 0 ? pipes[i](x()) : pipes[i](n)
          }
          return n
        }
      }
    }
  }
  return options
}

