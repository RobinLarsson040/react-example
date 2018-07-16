import {sum, jonas} from '../testCases.js'


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Jonas is expected to be smart ! =)', () =>{
expect(jonas('smart')).toBe('Jonas is very smart');
});