const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");

router.route("/").get(getContracts).post(validateToken,createContract);
router.route("/:id").get(validateToken,getcontract).put(validateToken,updateContract).delete(validateToken,deleteContract);


module.exports = router;