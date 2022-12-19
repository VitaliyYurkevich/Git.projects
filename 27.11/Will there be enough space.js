function enough(cap, on, wait) {
    if (cap >= on + wait) {
      return 0 // your code here
    } else {
        return on + wait - cap
    }
}