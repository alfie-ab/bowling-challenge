Game = function() {"use strict";
  this._frames = []
};

Game.prototype = {
  addFrame: function(frame){
    this._frames.push(frame);
  }
};
