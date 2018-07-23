var friends = require("../data/friends.js");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page, when a user visits a link

  app.get("/api/survey", function(req, res) {
    res.json(friends);
  })

};
