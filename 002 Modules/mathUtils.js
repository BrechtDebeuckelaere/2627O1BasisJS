function optellen(a, b) {
  return a + b;
}

function vermenigvuldigen(a, b) {
  return a * b;
}

// Gebruik module.exports voor CommonJS (require)
module.exports = {
  optellen,
  vermenigvuldigen,
};
