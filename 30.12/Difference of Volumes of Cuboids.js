function findDifference(a, b) {
    let ar = a.reduce((acc, rec) => acc * rec)
    let br = b.reduce((acc, rec) => acc * rec) 
    return Math.abs(ar - br)
  }