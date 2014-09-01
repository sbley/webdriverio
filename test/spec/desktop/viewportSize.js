describe('setViewportSize/getViewportSize', function() {
    before(h.setup());

    it('should change viewport size of current window and should return the exact value', function(done) {
        this.client
            .setViewportSize({
                width: 500,
                height: 500
            })
            .getViewportSize(function(err, size) {
                assert.ifError(err);
                size.width.should.be.exactly(500);
                size.height.should.be.exactly(500);
            })
            .call(done);
    });

    it('should let windowHandleSize return bigger values since it includes menu and status bar heights', function(done) {
        this.client
            .windowHandleSize(function(err, res) {
                assert.ifError(err);
                res.value.width.should.be.exactly(500);
                res.value.height.should.be.greaterThan(500);
            })
            .call(done);
    });

});