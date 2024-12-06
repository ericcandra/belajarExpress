const express = require("express");

const router = express.Router();

const prodiController = require("../controllers/prodiController");

const authMiddleware = require("../middleware/authmiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/", prodiController.getAllProdi);
// Mengatur rute POST untuk membuat data fakultas baru
router.post("/", prodiController.createProdi);
// Mengatur rute GET untuk mendapatkan data fakultas berdasarkan ID
router.get("/:id", prodiController.getProdiById);
// Mengatur rute PUT untuk memperbarui data fakultas berdasarkan ID
router.put("/:id", prodiController.updateProdi);
// Mengatur rute DELETE untuk menghapus data fakultas berdasarkan ID
router.delete("/:id", prodiController.deleteProdi);

// router.get("/", prodiController.getAllProdi);

// router.post("/", prodiController.createProdi);

// router.get("/:id", prodiController.getProdiById);

// router.put("/:id", prodiController.updateProdi);

// router.delete("/:id", prodiController.deleteProdi);

module.exports = router;