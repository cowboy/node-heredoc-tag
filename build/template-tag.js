'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (strings) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return strings.reduce(function (result, string, n) {
    return result + (n > 0 ? values[n - 1] : '') + string;
  }, '');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZW1wbGF0ZS10YWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUFlLFVBQVMsT0FBVCxFQUE2QjtvQ0FBUjs7R0FBUTs7QUFDMUMsU0FBTyxRQUFRLE1BQVIsQ0FBZSxVQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLENBQWpCO1dBQXVCLFVBQVUsSUFBSSxDQUFKLEdBQVEsT0FBTyxJQUFJLENBQUosQ0FBZixHQUF3QixFQUF4QixDQUFWLEdBQXdDLE1BQXhDO0dBQXZCLEVBQXVFLEVBQXRGLENBQVAsQ0FEMEM7Q0FBN0IiLCJmaWxlIjoidGVtcGxhdGUtdGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIHJldHVybiBzdHJpbmdzLnJlZHVjZSgocmVzdWx0LCBzdHJpbmcsIG4pID0+IHJlc3VsdCArIChuID4gMCA/IHZhbHVlc1tuIC0gMV0gOiAnJykgKyBzdHJpbmcsICcnKTtcbn1cbiJdfQ==
