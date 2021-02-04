describe('Test', () => {
    it('should not fail like in 1677975', () => {
        browser.execute(function setBody() {
            document.documentElement.innerHTML = '<html><body><iframe src="https://mozilla.com/"></iframe></body></html>';
        });
        browser.switchToFrame($('iframe'));
        // browser.pause(300); // if this is uncommented then everything works
        $('#content').click(); // otherwise it fails here
    });
});


