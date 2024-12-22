const asyncHandler = require("express-async-handler");
const Contract = require("../models/contractModel");

//@desc get contracts
//@route POST api/contracts
//@access public
const getContracts = asyncHandler(async (req, res) => {
  const contracts = await Contract.find();
  res.status(200).json(contracts);
});

//@desc create contract
//@route POST api/contracts
//@access private
const createContract = asyncHandler(async (req, res) => {
  const {
    title,
    crop_type,
    location,
    duration,
    area,
    price,
    description,
    requirements,
    timeline,
  } = req.body;

  const contract = await Contract.create({
    user_id: req.user.id,
    title,
    crop_type,
    location,
    duration,
    area,
    price,
    description,
    requirements,
    timeline,
  });
  if (!contract) {
    res.status(400);
    throw new Error("All fields are necessary");
  }
  res.status(201).json(contract);
});

//@desc get contract
//@route GET api/contracts/:id
//@access private
const getContract = asyncHandler(async (req, res) => {
  const contract = await Contract.findById(req.params.id);
  if (!contract) {
    res.status(404);
    throw new Error("Contract doesn't exist");
  }
  res.status(200).json(contract);
});

//@desc update contract
//@route PUT api/contracts/:id
//@access private
const updateContract = asyncHandler(async (req, res) => {
  const contract = await Contract.findByIdAndUpdate(req.params.id,req.body,{new:true});
  if (!contract) {
    res.status(404);
    throw new Error("Failed to update contract");
  }
  res.status(201).json(contract);
});

//@desc delete contract
//@route DELETE api/contracts/:id
//@access private
const deleteContract = asyncHandler(async (req, res) => {
  const contract = await Contract.findByIdAndDelete(req.params.id);
  if (!contract) {
    res.status(404);
    throw new Error("Failed to delete contract");
  }
  res.status(201).json(contract);
});

module.exports = {
  getContracts,
  createContract,
  getContract,
  updateContract,
  deleteContract,
};
