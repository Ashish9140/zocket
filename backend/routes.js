const router = require('express').Router();
const campaignsModal = require('./campaigns-modal');


router.get("/api/campaigns", async (req, res) => {
    let compaigns = await campaignsModal.find();
    res.json(compaigns);
})

router.post("/api/delete", async (req, res) => {
    const { _id } = req.body;
    // console.log(location);
    campaignsModal.deleteOne({ _id: _id }).then(function () {
        console.log("Data deleted"); // Success
    }).catch(function (error) {
        console.log(error); // Failure
    });
    let compaigns = await campaignsModal.find();
    res.json(compaigns);
})

router.post("/api/campaigns", async (req, res) => {
    const { type, name, startdate, enddate, budget, location, avatar, createddate } = req.body;
    console.log(req.body);

    // generating random numbers for not given data
    let x = Math.floor((Math.random() * 3) + 1);
    let platform = ["Facebook", "Google", "Youtube"];
    let clicks = 100;

    let status = ["Live now", "Paused", "Exhausted"];

    let compaign = await campaignsModal.create({
        type,
        name,
        startdate,
        enddate,
        budget,
        location,
        clicks: clicks * x,
        platform: platform[x - 1],
        status: status[x - 1],
        avatar,
        createddate
    })
    res.json(compaign);
})

module.exports = router;