
describe('App loaded', function() {
    beforeEach(module('joeno'));
    
    it('should be loaded', function() {
        expect(app).to.not.be.undefined;
    });
});
