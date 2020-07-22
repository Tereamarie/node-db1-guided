const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();
// /api/posts/
router.get('/', (req, res) => {
    //SELECT * FROM posts;
    db.select("*")
    .from('posts')
    .then((postsArray) => res.status(200).json({data: postsArray}))
    .catch(err => console.log(err));
});

router.get('/:id', (req, res) => {
const { id } = req.params;
//SELECT * FROM posts WHERE id = id;/
 db('posts')
 //.where("id", "=", id)/
 //.where({id: id})
 .where("id", id)
 .first()
.then((post) =>res.status(200).json({data: postsArray}))
 .catch( (err) => console.log(posts));
});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;