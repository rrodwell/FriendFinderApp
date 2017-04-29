// DEPENDENCIES
var friendData = require("../data/friends");

// ROUTING
module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        // A POST routes `/api/friends`. This will be used to handle incoming survey results.
        // This route will also be used to handle the compatibility logic.
        if (friendData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }
        else {
            waitListData.push(req.body);
            res.json(false);
        }
    });
}