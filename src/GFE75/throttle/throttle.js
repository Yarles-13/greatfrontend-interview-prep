// Throttling is used in cases where frequent execution of a function can cause 
// performance issues

// (Handling scroll events, window resize, API rate limiting, mousemove events)



//USING SET TIMEOUT 
// this func exec is delated and only runs after the specified time interval has passed
function throttle (func, delay) {
  let isThrottled = false;

  return function (...args) {
    if (!isThrottled) {
      func.apply(this, args);

      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
      }, delay)
    }
  }
}




window.addEventListener("scroll", throttle(() => {
  console.log("scroll event triggered")
}, 3000))


///USING Date.now()
// to keep track of the last execetion time and determine when the func should be called again

function throttle2 (func, delay) {
  let time = 0;

  return function (...args) {
    let now = Date.now();

    if (now - time >= delay) {
      func.apply(this, args);
      time = now;
    }
  }
} 

