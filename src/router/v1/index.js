const express = require("express");
const   FormRouter = require("./form.router");
const router = express.Router();

router.use("/form" , FormRouter);

module.exports  = router;