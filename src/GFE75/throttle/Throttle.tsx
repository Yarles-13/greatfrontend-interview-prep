type ThrottleFunction <T extends any[]> = (this: any, ...args: T) => any;


export default function Throttle<T extends any[]>(
  func: ThrottleFunction<T>,
  wait: number,
): ThrottleFunction<T> {
  let shouldThrottle = false;

  return function (...args){
    if (shouldThrottle){
      return 
    }

    shouldThrottle = true;
    setTimeout(function () {
      shouldThrottle = false;
    }, wait)

    func.apply(this, args)
  }
}