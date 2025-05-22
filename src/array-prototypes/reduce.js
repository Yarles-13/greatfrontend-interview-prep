Array.prototype.reduce = function (callback, initialValue) {
  // inisitalize acc 
  // inistlize 
  let accumulator = initialValue === undefined ? undefined : initialValue;
  let start = initialValue === undefined ? 1 : 0;

  for (let i = start; i < this.length; i++) {
    accumulator = callback(accumulator, this[i])
  }
  return accumulator
}


