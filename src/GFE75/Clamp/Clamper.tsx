// this function restricts a number to a specified range.
// three args.... number to clamp, min val, max val

// if number < min val return min val
// if number > max val return max val

// with Math Min 

export default function Clamper (target:number, lower:number, upper:number ):number {
  if (target < lower) {
    return lower
  }

  if (target > upper) {
    return upper
  }

  return target;
}