describe('Game', function() { 'use strict';

  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it("the player should start the game with an empty frame", function(){
    expect(game._frames).not.toContain(["frame"]);
  });

  it("the player should be able to add a frame", function(){
    game.addFrame(frame);
    expect(game._frames).toContain(frame);
  });

});
