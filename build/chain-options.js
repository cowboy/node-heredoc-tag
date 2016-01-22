"use strict";

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty4 = require("babel-runtime/core-js/object/define-property");

var _defineProperty5 = _interopRequireDefault(_defineProperty4);

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props, fn) {
  function getWrapper() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var wrapper = function wrapper() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return fn.apply(undefined, [options].concat(args));
    };
    props.forEach(function (prop) {
      (0, _defineProperty5.default)(wrapper, prop, {
        enumerable: true,
        get: function get() {
          return getWrapper((0, _assign2.default)({}, options, (0, _defineProperty3.default)({}, prop, !options[prop])));
        },
        set: function set() {}
      });
      wrapper[prop] = function () {
        return wrapper.apply(undefined, arguments);
      };
    });
    return wrapper;
  }
  return getWrapper();
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFpbi1vcHRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFBZSxVQUFTLEtBQVQsRUFBZ0IsRUFBaEIsRUFBb0I7QUFDakMsV0FBUyxVQUFULEdBQWtDO1FBQWQsZ0VBQVUsa0JBQUk7O0FBQ2hDLFFBQU0sVUFBVSxTQUFWLE9BQVU7d0NBQUk7Ozs7YUFBUyxxQkFBRyxnQkFBWSxLQUFmO0tBQWIsQ0FEZ0I7QUFFaEMsVUFBTSxPQUFOLENBQWMsZ0JBQVE7QUFDcEIsb0NBQXNCLE9BQXRCLEVBQStCLElBQS9CLEVBQXFDO0FBQ25DLG9CQUFZLElBQVo7QUFDQSw0QkFBTTtBQUNKLGlCQUFPLFdBQVcsc0JBQWMsRUFBZCxFQUFrQixPQUFsQixvQ0FBNkIsTUFBTyxDQUFDLFFBQVEsSUFBUixDQUFELENBQXBDLENBQVgsQ0FBUCxDQURJO1NBRjZCO0FBS25DLDRCQUFNLEVBTDZCO09BQXJDLEVBRG9CO0FBUXBCLGNBQVEsSUFBUixJQUFnQjtlQUFhO09BQWIsQ0FSSTtLQUFSLENBQWQsQ0FGZ0M7QUFZaEMsV0FBTyxPQUFQLENBWmdDO0dBQWxDO0FBY0EsU0FBTyxZQUFQLENBZmlDO0NBQXBCIiwiZmlsZSI6ImNoYWluLW9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwcm9wcywgZm4pIHtcbiAgZnVuY3Rpb24gZ2V0V3JhcHBlcihvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB3cmFwcGVyID0gKC4uLmFyZ3MpID0+IGZuKG9wdGlvbnMsIC4uLmFyZ3MpO1xuICAgIHByb3BzLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod3JhcHBlciwgcHJvcCwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFdyYXBwZXIoT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1twcm9wXTogIW9wdGlvbnNbcHJvcF19KSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCgpIHt9LFxuICAgICAgfSk7XG4gICAgICB3cmFwcGVyW3Byb3BdID0gKC4uLmFyZ3MpID0+IHdyYXBwZXIoLi4uYXJncyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHdyYXBwZXI7XG4gIH1cbiAgcmV0dXJuIGdldFdyYXBwZXIoKTtcbn1cbiJdfQ==
