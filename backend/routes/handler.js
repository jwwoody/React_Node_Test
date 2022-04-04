const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    const str = [
        {
            "name": "Jeffrey",
            "msg": "Possible User",
            "username": "woodbury"
        },
    ];
    res.end(JSON.stringify(str));
});

router.post('/addUser', (req, res) => {
    res.end('NA');
});

module.exports = router;