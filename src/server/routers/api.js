import express from "express";
//const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({welcome: 'Welcome to the API!'});
  });

export default router