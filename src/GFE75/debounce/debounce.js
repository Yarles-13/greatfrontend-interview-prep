// Debounce executes a function only after a certain amount of time since it was last invoked


// It is important to keep reference of the "this" value, thus we have to use function.apply()
// or use function.call()

// With normal javascript functions, `this` is bound when the function is called. 

// With arrow functions, `this` is bound to the context in which the function is originally created.


// function debounce (callback, wait) {
//   let timeoutID = null;
  
//   return function (...args) {
//     const context = this;
//     clearTimeout(timeoutID)
//     timeoutID = setTimeout(function () {
//       timeoutID = null;

//       callback.apply(context, args)
//     }, wait)
//   }
// }


function debounce (func, wait) {
  let timeoutID = null;

  return (...args) {
    const context = this;
    clearTimeout(timeoutID);

    timeoutID = setTimeout(function () {
      timeoutID = null

      func.apply(context, args)
    }, wait)
  }
}


function SayHello () {
  console.log("My name is", this.name)
}

const amy = {
  name: "Amy",
  introduction: debounce(SayHello)
}

amy.introduction() // My name is Amy

