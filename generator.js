module.exports = (sequencer) => {
  return {
    next: sequencer()
  }
}

