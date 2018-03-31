const { expect } = require('chai')
const SemVar = require('../SemVar')

describe('SemVar class', () => {

    it('semantic versions can be separately accessed', () => {
        const semvar = new SemVar('1', '2', '3', '-alpha', '+001')
        
        expect(semvar.getMajor()).to.equal('1')
        expect(semvar.getMinor()).to.equal('2')
        expect(semvar.getPatch()).to.equal('3')
        expect(semvar.getPreRelease()).to.equal('-alpha')
        expect(semvar.getMetadata()).to.equal('+001')
    })

    it('can parse semvar string in SemVar data type', () => {
        const semvarString = '1.2.3-alpha+001'
        const semvar = SemVar.parse(semvarString)

        expect(semvar.getMajor()).to.equal("1");
        expect(semvar.getMinor()).to.equal("2");
        expect(semvar.getPatch()).to.equal("3");
        expect(semvar.getPreRelease()).to.equal("-alpha");
        expect(semvar.getMetadata()).to.equal("+001");
    })

    it('can convert from SemVar to semvar string', () => {
        const semvar = new SemVar("1", "2", "3", "-alpha", "+001")

        expect(semvar.convert()).to.equal("1.2.3-alpha+001")
    })
})