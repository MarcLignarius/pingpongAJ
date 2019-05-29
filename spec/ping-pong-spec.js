import { pingPong } from './../src/ping-pong.js';

describe('pingPong', function() {

  it('should replace 3 with ping', function() {
    expect(pingPong([3])).toEqual(1, 2, "ping");
  });
});
