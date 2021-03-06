var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = function(app) {
    //function to capture the user input data  and insert into a db tabel
    app.post("/api/create-pet", isAuthenticated, function(req, res) {
        db.Pet.create({
            name: req.body.name,
            gender: req.body.gender,
            breed: req.body.breed,
            age: req.body.age,
            notes: req.body.notes,
            img_url: req.body.image,
            UserId: req.user.id
        })
        .then(function() {
            res.status(200).json({});
        })
        .catch(function(err) {
            console.error(err);
            res.status(401).json(err);
        });
    });
    app.post("/api/create-post", isAuthenticated, function(req, res) {
        db.Post.create({
            title: req.body.title,
            description: req.body.description,
            likes: 0,
            img_url: req.body.image,
            PetId: req.body.pet
        })
        .then(function(){
            res.status(200).json({});
        })
        .catch(function(err){
            res.status(401).json(err);
        });
    });
};