const express = require("express");
const connection = require("../../../db/db");
const router = express.Router();

router.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM product; SELECT * FROM market",
    (error, row, field) => {
      if (error) throw error;
      res.json(row);
    }
  );
});

module.exports = router;
