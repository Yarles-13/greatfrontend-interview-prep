// Iterative Approach

export default function flatten(value) {
  const result = [];
  const copy = value.slice();

  while (copy.length) {
    const item = copy.shift();

    if (Array.isArray(item)) {
      copy.unshift(...item);
    } else {
      result.push(item)
    }
  }
}

//Using some()

export default function flattenTwo(value) {
  while (value.some(Array.isArray)) {
    value = [].concat(...value)
  }

  return value
}