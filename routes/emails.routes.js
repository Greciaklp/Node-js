import express from "express";
const router = express.Router();
import {
  agregarEmail,
  buscarEmail,
  borrarEmail,
  actualizarEmail,
  encontrarEmailById,
} from "../controllers/emails.controller.js";

router.post("/", agregarEmail);
router.get("/", buscarEmail);
router.get("/:id", encontrarEmailById);
router.delete("/:id", borrarEmail);
router.put("/:id", actualizarEmail);

export default router;