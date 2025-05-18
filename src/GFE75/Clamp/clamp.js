// this function restricts a number to a specified range.
// three args.... number to clamp, min val, max val

// if number < min val return min val
// if number > max val return max val

// with Math Min 

function clamp (number , max, min ) {
  return Math.min(Math.max(number, min), max)
}
