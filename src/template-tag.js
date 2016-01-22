export default function(strings, ...values) {
  return strings.reduce((result, string, n) => result + (n > 0 ? values[n - 1] : '') + string, '');
}
