'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chainOptions = require('./chain-options');

var _chainOptions2 = _interopRequireDefault(_chainOptions);

var _templateTag = require('./template-tag');

var _templateTag2 = _interopRequireDefault(_templateTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _chainOptions2.default)(['trim', 'unindent', 'oneline'], function (_ref, strings) {
  var trim = _ref.trim;
  var unindent = _ref.unindent;
  var oneline = _ref.oneline;

  for (var _len = arguments.length, values = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    values[_key - 2] = arguments[_key];
  }

  var str = _templateTag2.default.apply(undefined, [strings].concat(values));
  var lines = str.split('\n');

  if (oneline) {
    if (trim) {
      // Remove any whitespace-only lines.
      lines = lines.filter(function (s) {
        return (/\S/.test(s)
        );
      });
      // Trim each line individually.
      lines = lines.map(function (s) {
        return s.trim();
      });
      // Join all trimmed lines on space.
      str = lines.join(' ');
    } else {
      // Just remove newlines.
      str = str.replace(/\n+/g, '');
    }
  } else if (unindent) {
    (function () {
      // Unindent every line by the minimum indent shared by all non-whitespace lines.
      var indent = lines.filter(function (s) {
        return (/\S/.test(s)
        );
      }).reduce(function (n, s) {
        return Math.min(n, s.match(/^\s*/)[0].length);
      }, Infinity);
      lines = lines.map(function (s) {
        return s.slice(indent);
      });
      if (trim) {
        // Remove all trailing whitespace.
        lines = lines.map(function (s) {
          return s.replace(/\s+$/, '');
        });
        // Join string and remove leading/trailing newlines.
        str = lines.join('\n').replace(/^\n+|\n+$/g, '');
      } else {
        str = lines.join('\n');
      }
    })();
  } else if (trim) {
    str = str.trim();
  }

  return str;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O2tCQUdlLDRCQUFhLENBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsU0FBckIsQ0FBYixFQUE4QyxnQkFBb0MsT0FBcEMsRUFBd0Q7TUFBOUMsaUJBQThDO01BQXhDLHlCQUF3QztNQUE5Qix1QkFBOEI7O29DQUFSOztHQUFROztBQUNuSCxNQUFJLE1BQU0sd0NBQVksZ0JBQVksT0FBeEIsQ0FBTixDQUQrRztBQUVuSCxNQUFJLFFBQVEsSUFBSSxLQUFKLENBQVUsSUFBVixDQUFSLENBRitHOztBQUluSCxNQUFJLE9BQUosRUFBYTtBQUNYLFFBQUksSUFBSixFQUFVOztBQUVSLGNBQVEsTUFBTSxNQUFOLENBQWE7ZUFBSyxNQUFLLElBQUwsQ0FBVSxDQUFWOztPQUFMLENBQXJCOztBQUZRLFdBSVIsR0FBUSxNQUFNLEdBQU4sQ0FBVTtlQUFLLEVBQUUsSUFBRjtPQUFMLENBQWxCOztBQUpRLFNBTVIsR0FBTSxNQUFNLElBQU4sQ0FBVyxHQUFYLENBQU4sQ0FOUTtLQUFWLE1BUUs7O0FBRUgsWUFBTSxJQUFJLE9BQUosQ0FBWSxNQUFaLEVBQW9CLEVBQXBCLENBQU4sQ0FGRztLQVJMO0dBREYsTUFlSyxJQUFJLFFBQUosRUFBYzs7O0FBRWpCLFVBQU0sU0FBUyxNQUFNLE1BQU4sQ0FBYTtlQUFLLE1BQUssSUFBTCxDQUFVLENBQVY7O09BQUwsQ0FBYixDQUFnQyxNQUFoQyxDQUF1QyxVQUFDLENBQUQsRUFBSSxDQUFKO2VBQVUsS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLEVBQUUsS0FBRixDQUFRLE1BQVIsRUFBZ0IsQ0FBaEIsRUFBbUIsTUFBbkI7T0FBdEIsRUFBa0QsUUFBekYsQ0FBVDtBQUNOLGNBQVEsTUFBTSxHQUFOLENBQVU7ZUFBSyxFQUFFLEtBQUYsQ0FBUSxNQUFSO09BQUwsQ0FBbEI7QUFDQSxVQUFJLElBQUosRUFBVTs7QUFFUixnQkFBUSxNQUFNLEdBQU4sQ0FBVTtpQkFBSyxFQUFFLE9BQUYsQ0FBVSxNQUFWLEVBQWtCLEVBQWxCO1NBQUwsQ0FBbEI7O0FBRlEsV0FJUixHQUFNLE1BQU0sSUFBTixDQUFXLElBQVgsRUFBaUIsT0FBakIsQ0FBeUIsWUFBekIsRUFBdUMsRUFBdkMsQ0FBTixDQUpRO09BQVYsTUFNSztBQUNILGNBQU0sTUFBTSxJQUFOLENBQVcsSUFBWCxDQUFOLENBREc7T0FOTDtTQUppQjtHQUFkLE1BZUEsSUFBSSxJQUFKLEVBQVU7QUFDYixVQUFNLElBQUksSUFBSixFQUFOLENBRGE7R0FBVjs7QUFJTCxTQUFPLEdBQVAsQ0F0Q21IO0NBQXhEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWluT3B0aW9ucyBmcm9tICcuL2NoYWluLW9wdGlvbnMnO1xuaW1wb3J0IHRlbXBsYXRlVGFnIGZyb20gJy4vdGVtcGxhdGUtdGFnJztcblxuZXhwb3J0IGRlZmF1bHQgY2hhaW5PcHRpb25zKFsndHJpbScsICd1bmluZGVudCcsICdvbmVsaW5lJ10sIGZ1bmN0aW9uKHt0cmltLCB1bmluZGVudCwgb25lbGluZX0sIHN0cmluZ3MsIC4uLnZhbHVlcykge1xuICBsZXQgc3RyID0gdGVtcGxhdGVUYWcoc3RyaW5ncywgLi4udmFsdWVzKTtcbiAgbGV0IGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKTtcblxuICBpZiAob25lbGluZSkge1xuICAgIGlmICh0cmltKSB7XG4gICAgICAvLyBSZW1vdmUgYW55IHdoaXRlc3BhY2Utb25seSBsaW5lcy5cbiAgICAgIGxpbmVzID0gbGluZXMuZmlsdGVyKHMgPT4gL1xcUy8udGVzdChzKSk7XG4gICAgICAvLyBUcmltIGVhY2ggbGluZSBpbmRpdmlkdWFsbHkuXG4gICAgICBsaW5lcyA9IGxpbmVzLm1hcChzID0+IHMudHJpbSgpKTtcbiAgICAgIC8vIEpvaW4gYWxsIHRyaW1tZWQgbGluZXMgb24gc3BhY2UuXG4gICAgICBzdHIgPSBsaW5lcy5qb2luKCcgJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gSnVzdCByZW1vdmUgbmV3bGluZXMuXG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFxuKy9nLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgZWxzZSBpZiAodW5pbmRlbnQpIHtcbiAgICAvLyBVbmluZGVudCBldmVyeSBsaW5lIGJ5IHRoZSBtaW5pbXVtIGluZGVudCBzaGFyZWQgYnkgYWxsIG5vbi13aGl0ZXNwYWNlIGxpbmVzLlxuICAgIGNvbnN0IGluZGVudCA9IGxpbmVzLmZpbHRlcihzID0+IC9cXFMvLnRlc3QocykpLnJlZHVjZSgobiwgcykgPT4gTWF0aC5taW4obiwgcy5tYXRjaCgvXlxccyovKVswXS5sZW5ndGgpLCBJbmZpbml0eSk7XG4gICAgbGluZXMgPSBsaW5lcy5tYXAocyA9PiBzLnNsaWNlKGluZGVudCkpO1xuICAgIGlmICh0cmltKSB7XG4gICAgICAvLyBSZW1vdmUgYWxsIHRyYWlsaW5nIHdoaXRlc3BhY2UuXG4gICAgICBsaW5lcyA9IGxpbmVzLm1hcChzID0+IHMucmVwbGFjZSgvXFxzKyQvLCAnJykpO1xuICAgICAgLy8gSm9pbiBzdHJpbmcgYW5kIHJlbW92ZSBsZWFkaW5nL3RyYWlsaW5nIG5ld2xpbmVzLlxuICAgICAgc3RyID0gbGluZXMuam9pbignXFxuJykucmVwbGFjZSgvXlxcbit8XFxuKyQvZywgJycpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHN0ciA9IGxpbmVzLmpvaW4oJ1xcbicpO1xuICAgIH1cbiAgfVxuXG4gIGVsc2UgaWYgKHRyaW0pIHtcbiAgICBzdHIgPSBzdHIudHJpbSgpO1xuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn0pO1xuIl19
