// Sleep function that is Non-Blocking

export default function Sleep(duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

// Approach 2; Blocking version of sleep 

function BlockingSleep(delay: number) {
  let now = new Date().getTime();

  while (new Date().getTime() < now + delay) {

  }
}