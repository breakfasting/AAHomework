// Simple Timeout
window.setTimeout(() => alert('hammer-time'), 2000);

// Timeout Plus Closure
function hammerTime(time) {
  window.setTimeout(() => alert(`${time} hammer-time`), time);
}


