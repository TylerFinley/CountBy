describe('countBy', function() {
  it('will count from 0 to 15 by 5', function() {
    expect(countBy(15,5)).to.eql([5,10,15]);
  });
});
