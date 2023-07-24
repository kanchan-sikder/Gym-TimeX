
const slot = require("../controller/slots")
const equipment = require("../controller/equipments")
const gyms = require("../controller/gyms")
const express = require("express");
const verifytoken = require("../middlewares/verifytoken");


const router = express.Router();

function checkRole(req, res, next) {
    if (req.type !== "Employee") {
        return res.status(401).json({
            success: false,
            msg: "You don't have proper rights to make this request .",
        });
    }
    next();
}
router.use(verifytoken);

router.use(checkRole);

router.get('/equipments/category',equipment.category)

router.post('/slot/date', slot.showDate)

router.get('/equipments',equipment.showEmployee)

module.exports = router;