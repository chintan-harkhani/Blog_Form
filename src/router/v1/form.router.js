const { FormController } = require("../../controller");
const express = require("express");
const validate = require("../../middleware/validate");
const { FormValidation } = require("../../validation");
const router = express.Router();

//Form create
router.post(
  "/create",
  validate(FormValidation.CreateForm),
  FormController.CreateForm
);

// Form list
 router.get("/list", FormController.FormList);


 //searching Form
router.get("/search",FormController.Searchform);


//Form Pagination
router.get("/item/:pageno",FormController.FormPage);
module.exports = router;