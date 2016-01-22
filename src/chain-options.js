export default function(props, fn) {
  function getWrapper(options = {}) {
    const wrapper = (...args) => fn(options, ...args);
    props.forEach(prop => {
      Object.defineProperty(wrapper, prop, {
        enumerable: true,
        get() {
          return getWrapper(Object.assign({}, options, {[prop]: !options[prop]}));
        },
        set() {},
      });
      wrapper[prop] = (...args) => wrapper(...args);
    });
    return wrapper;
  }
  return getWrapper();
}
