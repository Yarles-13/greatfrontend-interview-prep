export default function makeCounter (initialValue:number = 0):Function {
  let count: number = initialValue - 1;

  return () => {
    count ++
    return count

  }
}