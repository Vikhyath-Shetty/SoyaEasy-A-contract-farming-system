const asyncHandler = require("express-async-handler");
const Application = require("../models/applicationModel");

//@desc apply for contracts
//POST api/application/:id
//@access private
const createApplication = asyncHandler(async (req, res) => {
  const { username, land, experience, information } = req.body;
  const application = await Application.create({
    user_id: req.user.id,
    contract_id: req.params.id,
    username,
    land,
    experience,
    information,
  });
  if (!application) {
    res.status(400);
    throw new Error("Failed to create Application");
  }
  res.status(201).json(application);
});

module.exports = createApplication;


//@ get applications
//GET api/application/
