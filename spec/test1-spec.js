const url = 'https://theta-website-athelvaci.c9users.io/index.html';
casper.test.begin('Start Bootstrap', 5, function suite(test) {
    
    casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Bulk Order Calculator', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > p', 'check form title is present');
    test.assertSelectorHasText('fieldset > p', 'Calculate a bulk book order.', 'check form title text');
   
  });
    
});