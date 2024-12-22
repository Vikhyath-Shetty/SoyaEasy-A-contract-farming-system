const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");
const { getContracts,createContract,getContract,updateContract,deleteContract} = require("../controller/contractController");

router.route("/").get(getContracts).post(validateToken, createContract);
router.route("/:id").get(validateToken,getContract).put(validateToken,updateContract).delete(validateToken,deleteContract);

module.exports = router;
