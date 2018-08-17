module.exports = (sequencer, args) => {
  return {
    next: sequencer(args)
  }
}

