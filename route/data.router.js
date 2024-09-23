import express from "express";
import { datasave } from "../controller/data.controller.js";

export const datarouter = express.Router();

datarouter.post("/save", datasave);
