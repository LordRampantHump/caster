import express from "express";
//const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
    res.send("Hello Vite + React!");
  });

export default router