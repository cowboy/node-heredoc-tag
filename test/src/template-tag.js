import templateTag from '../../src/template-tag';

describe('templateTag', function() {

  it('should behave like no tag was specified', function() {
    expect(templateTag`foo bar`).to.equal(`foo bar`);
    expect(templateTag`${1}`).to.equal(`${1}`);
    expect(templateTag`${1}${2}`).to.equal(`${1}${2}`);
    expect(templateTag`${1} bar`).to.equal(`${1} bar`);
    expect(templateTag`foo ${1}`).to.equal(`foo ${1}`);
    expect(templateTag`foo ${1} bar`).to.equal(`foo ${1} bar`);
    expect(templateTag`${1} foo bar`).to.equal(`${1} foo bar`);
    expect(templateTag`foo bar ${1}`).to.equal(`foo bar ${1}`);
    expect(templateTag`${1} foo ${2} bar ${3}`).to.equal(`${1} foo ${2} bar ${3}`);
  });

});
