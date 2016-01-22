import chainOptions from './chain-options';
import templateTag from './template-tag';

export default chainOptions(['trim', 'unindent', 'oneline'], function({trim, unindent, oneline}, strings, ...values) {
  let str = templateTag(strings, ...values);
  let lines = str.split('\n');

  if (oneline) {
    if (trim) {
      // Remove any whitespace-only lines.
      lines = lines.filter(s => /\S/.test(s));
      // Trim each line individually.
      lines = lines.map(s => s.trim());
      // Join all trimmed lines on space.
      str = lines.join(' ');
    }
    else {
      // Just remove newlines.
      str = str.replace(/\n+/g, '');
    }
  }

  else if (unindent) {
    // Unindent every line by the minimum indent shared by all non-whitespace lines.
    const indent = lines.filter(s => /\S/.test(s)).reduce((n, s) => Math.min(n, s.match(/^\s*/)[0].length), Infinity);
    lines = lines.map(s => s.slice(indent));
    if (trim) {
      // Remove all trailing whitespace.
      lines = lines.map(s => s.replace(/\s+$/, ''));
      // Join string and remove leading/trailing newlines.
      str = lines.join('\n').replace(/^\n+|\n+$/g, '');
    }
    else {
      str = lines.join('\n');
    }
  }

  else if (trim) {
    str = str.trim();
  }

  return str;
});
