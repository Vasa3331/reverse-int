module.exports = function reverse (n) {
    while (n % 10 == 0) {
        n = n / 10;
    }
    let s = '' + Math.sign(n) * n;
    let result = '';
    for (let i = s.length - 1; i >= 0; i--) {
      result += s[i];
    }
    return result;
  }

