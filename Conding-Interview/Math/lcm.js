function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function lcm(a, b) {
  return a === 0 || b === 0 ? 0 : (a * b) / gcd(a, b);
}
