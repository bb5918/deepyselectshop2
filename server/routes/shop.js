const express = require('express');
const router = express.Router();
const { Shop } = require("../models/Shop");

const { auth } = require("../middleware/auth");



//=================================
//             Shop
//=================================



router.post("/uploadShop", auth, (req, res) => {

    //save all the data we got from the client into the DB 
    const shop = new Shop(req.body)

    shop.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});


router.post("/getShops", (req, res) => {

    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";

    let findArgs = {};
    let term = req.body.searchTerm;

    for (let key in req.body.filters) {

        if (req.body.filters[key].length > 0) {
                findArgs[key] = req.body.filters[key];

        }
    }

    console.log(findArgs)

    if (term) {
        Shop.find(findArgs)
            .find({ $text: { $search: term } })
            .sort([[sortBy, order]])
            .exec((err, shops) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, shops, postSize: shops.length })
            })
    } else {
        Shop.find(findArgs)
            .sort([[sortBy, order]])
            .exec((err, shops) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, shops, postSize: shops.length })
            })
    }

});


//?id=${shopId}&type=single
//id=12121212,121212,1212121   type=array 
router.get("/shops_by_id", (req, res) => {
    let type = req.query.type
    let shopIds = req.query.id

    console.log("req.query.id", req.query.id)

    if (type === "array") {
        let ids = req.query.id.split(',');
        shopIds = [];
        shopIds = ids.map(item => {
            return item
        })
    }

    console.log("shopIds", shopIds)


    //we need to find the shop information that belong to shop Id 
    Shop.find({ '_id': { $in: shopIds } })
        .exec((err, shop) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(shop)
        })
});



module.exports = router;
