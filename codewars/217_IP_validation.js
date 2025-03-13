function isValidIP(str) {
  let parts = str.split(".");
  if (parts.length !== 4) {
    return false;
  }
  for (let i = 0; i < parts.length; i++) {
    if (isNaN(parts[i]) || parts[i] < 0 || parts[i] > 255) {
      return false;
    }
  }
  return true;
}

console.log(isValidIP("192.168.1.1")); // Output: true
console.log(isValidIP("256.168.1.1")); // Output: false
console.log(isValidIP("192.168.1")); // Output: false
console.log(isValidIP("192.168.1.1.1")); // Output: false
console.log(isValidIP("192.168@1.1")); // Output: false
console.log(isValidIP("192.168.1.1a")); // Output: false
console.log(isValidIP("192.168.1.1-1")); // Output: false
console.log(isValidIP("192.168.1.1 1")); // Output: false
