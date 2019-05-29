import { pingPong } from './../src/ping-pong.js';

describe('pingPong', function() {

  it('should replace 3 with ping', function() {
    var arr = [1, 2, "ping"];
    expect(pingPong(3)).toEqual(arr);
  });

  it('should replace 5 with pong', function() {
    var arr = [1, 2, "ping", 4, "pong"];
    expect(pingPong(5)).toEqual(arr);
  });

  it('should replace 15 with ping-pong', function() {
    var arr = [1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping-pong"];
    expect(pingPong(15)).toEqual(arr);
  });
});
