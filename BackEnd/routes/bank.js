const router = require("express").Router();
let Bank = require("../models/checkIns");

router.route("/add").post((req,res) => {
    const nic = req.body.nic;
    const telnumber = Number(req.body.telnumber);

    const newVisitor = new Bank({
        nic,
        telnumber
    })

    newVisitor.save().then(() => {
        res.json("Visitor added")
    }).catch((err) => {
        console.log(err)
    })
})

router.route("/").get((req,res) => {
    Bank.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;