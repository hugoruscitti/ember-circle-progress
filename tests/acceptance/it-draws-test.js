import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | it draws');

test('visiting /it-draws', function(assert) {
  visit('/it-draws');

  andThen(function() {
    assert.equal(currentURL(), '/it-draws');
  });
});
