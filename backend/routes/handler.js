const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/user', (req, res) => {
    console.log('User Clicked!!!');
    // axios({
    //     url: 'https://randomuser.me/api/?results=50',
    //     method: 'get',
    //     data: {
    //     }
    //   })
        try {
            const response = axios({
                url: "https://randomuser.me/api/?results=2",
                method: "GET",
            });
            res.status(200).json(response.data);
        } catch (err) {
            res.status(500).json({ message: err });
        }


    
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