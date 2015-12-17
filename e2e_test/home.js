describe('homepage', function() {
  beforeEach(function() {
  	browser.get('home');
  });

  it('should display a welcome message', function() {
  	var content = element(by.css('home p'));
  	expect(content.getText()).toEqual('Welcome to Angular Seed');
  });
});
