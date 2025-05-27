Array.prototype.square = function () {
  const length = this.length;
  const results = new Array(length);


  for (let i = 0; i < this.length; i++) {
    results[i] = this[i] * this[i];
  }

  return results
}


//Approach2 

function squaring () {
  return this.map((element) => element * element)
}