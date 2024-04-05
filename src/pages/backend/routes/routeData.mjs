import express from "express";
import {
  index,
  showAnggota,
  updateAnggota,
  tambahAnggota,
  deleteAnggota,
} from "../controller/controller.mjs";
import { body } from "express-validator";

const router = express.Router();

router.get("/", index);

router.post(
  "/tambahAnggota",
  [
    // validation
    body("nama").notEmpty(),
    body("image_url").notEmpty(),
    body("deskripsi_singkat").notEmpty(),
  ],
  tambahAnggota
);

router.get("/(:id)", showAnggota);

router.patch(
  "/update/:id",
  [
    //validation
    body("nama").notEmpty(),
    body("image_url").notEmpty(),
    body("deskripsi_singkat").notEmpty(),
  ],
  updateAnggota
);

router.delete("/delete/(:id)", deleteAnggota);

export default router;
