import heredoc from '../../src';

describe('heredoc', function() {

  describe('default', function() {

    it('should do nothing by default', function() {
      expect(heredoc`foo bar`).to.equal(`foo bar`);
      expect(heredoc`${1}`).to.equal(`${1}`);
      expect(heredoc`${1}${2}`).to.equal(`${1}${2}`);
      expect(heredoc`${1} bar`).to.equal(`${1} bar`);
      expect(heredoc`foo ${1}`).to.equal(`foo ${1}`);
      expect(heredoc`foo ${1} bar`).to.equal(`foo ${1} bar`);
      expect(heredoc`${1} foo bar`).to.equal(`${1} foo bar`);
      expect(heredoc`foo bar ${1}`).to.equal(`foo bar ${1}`);
      expect(heredoc`${1} foo ${2} bar ${3}`).to.equal(`${1} foo ${2} bar ${3}`);
      expect(heredoc`   ${1} foo ${2} bar ${3}   `).to.equal(`   ${1} foo ${2} bar ${3}   `);
      expect(heredoc`\n\n\n${1} foo ${2} bar ${3}\n\n\n`).to.equal(`\n\n\n${1} foo ${2} bar ${3}\n\n\n`);
      expect(heredoc`\n \n${1} foo ${2} bar ${3}\n \n`).to.equal(`\n \n${1} foo ${2} bar ${3}\n \n`);
    });

    it('should trim', function() {
      expect(heredoc.trim`  foo  `).to.equal(`foo`);
      expect(heredoc.trim` \n foo \n`).to.equal(`foo`);
      expect(heredoc.trim`\n \n foo \n \n`).to.equal(`foo`);
      expect(heredoc.trim`  ${1}  `).to.equal(`${1}`);
      expect(heredoc.trim` \n ${1} \n `).to.equal(`${1}`);
      expect(heredoc.trim`\n \n ${1} \n \n`).to.equal(`${1}`);
    });

    it('should remove newlines', function() {
      expect(heredoc.oneline`  foo  `).to.equal(`  foo  `);
      expect(heredoc.oneline` \n foo \n `).to.equal(`  foo  `);
      expect(heredoc.oneline`\n \n foo \n \n`).to.equal(`  foo  `);
      expect(heredoc.oneline`  ${1}  `).to.equal(`  ${1}  `);
      expect(heredoc.oneline` \n ${1} \n `).to.equal(`  ${1}  `);
      expect(heredoc.oneline`\n \n ${1} \n \n`).to.equal(`  ${1}  `);
    });

    it('should remove newlines, trim each line, then join lines with a space', function() {
      expect(heredoc.oneline.trim`  foo  `).to.equal(`foo`);
      expect(heredoc.oneline.trim` \n foo \n `).to.equal(`foo`);
      expect(heredoc.oneline.trim`\n \n foo \n \n`).to.equal(`foo`);
      expect(heredoc.oneline.trim`  ${1}  `).to.equal(`${1}`);
      expect(heredoc.oneline.trim` \n ${1} \n `).to.equal(`${1}`);
      expect(heredoc.oneline.trim`\n \n ${1} \n \n`).to.equal(`${1}`);
      expect(heredoc.oneline.trim`\n foo \n bar \n baz \n`).to.equal(`foo bar baz`);
      expect(heredoc.oneline.trim`\n foo bar \n \n baz \n`).to.equal(`foo bar baz`);
    });

    it('should unindent as far as possible', function() {
      expect(heredoc.unindent`  foo`).to.equal(`foo`);
      expect(heredoc.unindent`  foo  `).to.equal(`foo  `);
      expect(heredoc.unindent`  foo\n  bar`).to.equal(`foo\nbar`);
      expect(heredoc.unindent`  foo  \n  bar  `).to.equal(`foo  \nbar  `);
      expect(heredoc.unindent`\n\n  foo  \n  bar  \n\n`).to.equal(`\n\nfoo  \nbar  \n\n`);
      expect(heredoc.unindent`  foo\n  bar\n    baz`).to.equal(`foo\nbar\n  baz`);
      expect(heredoc.unindent`    foo\n  bar\n    baz`).to.equal(`  foo\nbar\n  baz`);
      expect(heredoc.unindent`    foo\n    bar\n    baz`).to.equal(`foo\nbar\nbaz`);
      expect(heredoc.unindent`    foo\n  bar\nbaz`).to.equal(`    foo\n  bar\nbaz`);
      expect(heredoc.unindent` \n \n    foo\n  bar \nbaz \n \n`).to.equal(` \n \n    foo\n  bar \nbaz \n \n`);
      expect(heredoc.unindent` \n \n    foo\n  bar \n  baz \n \n`).to.equal(`\n\n  foo\nbar \nbaz \n\n`);
    });

    it('should unindent, trim the ends of lines, trim leading/trailing whitespace', function() {
      expect(heredoc.unindent.trim`  foo`).to.equal(`foo`);
      expect(heredoc.unindent.trim`  foo  `).to.equal(`foo`);
      expect(heredoc.unindent.trim`  foo\n  bar`).to.equal(`foo\nbar`);
      expect(heredoc.unindent.trim`  foo  \n  bar  `).to.equal(`foo\nbar`);
      expect(heredoc.unindent.trim`\n\n  foo  \n  bar  \n\n`).to.equal(`foo\nbar`);
      expect(heredoc.unindent.trim`  foo\n  bar\n    baz`).to.equal(`foo\nbar\n  baz`);
      expect(heredoc.unindent.trim`    foo\n  bar\n    baz`).to.equal(`  foo\nbar\n  baz`);
      expect(heredoc.unindent.trim`    foo\n    bar\n    baz`).to.equal(`foo\nbar\nbaz`);
      expect(heredoc.unindent.trim`    foo\n  bar\nbaz`).to.equal(`    foo\n  bar\nbaz`);
      expect(heredoc.unindent.trim` \n \n    foo\n  bar \nbaz \n \n`).to.equal(`    foo\n  bar\nbaz`);
      expect(heredoc.unindent.trim` \n \n    foo\n  bar \n  baz \n \n`).to.equal(`  foo\nbar\nbaz`);
    });

  });

});

