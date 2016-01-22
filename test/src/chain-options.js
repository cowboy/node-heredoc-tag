import chainOptions from '../../src/chain-options';

describe('chainOptions', function() {

  it('should chain and pass args correctly', function() {
    let args;
    const fn = chainOptions(['foo', 'bar'], function(options, ...a) {
      expect(a).to.deep.equal(args);
      return options;
    });
    args = [];
    expect(fn()).to.deep.equal({});
    args = ['foo', 123, true, null];
    expect(fn(...args)).to.deep.equal({});
    expect(fn.foo(...args)).to.deep.equal({foo: true});
    expect(fn.bar(...args)).to.deep.equal({bar: true});
    expect(fn.foo.bar(...args)).to.deep.equal({foo: true, bar: true});
    expect(fn.bar.foo(...args)).to.deep.equal({foo: true, bar: true});
    expect(fn.foo.foo(...args)).to.deep.equal({foo: false});
    expect(fn.foo.bar.foo(...args)).to.deep.equal({foo: false, bar: true});
  });

});

