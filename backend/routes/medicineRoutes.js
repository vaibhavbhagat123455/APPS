import express from "express";
import Medicine from "../models/Medicine.js";

const router = express.Router();

// Get medicine by main TextCode
router.get("/getByCode/:code", async (req, res) => {
    try {
        const med = await Medicine.findOne({ TextCode: req.params.code });
        if (!med) return res.status(404).json({ message: "Medicine not found" });
        res.json(med);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get medicine by SubTextCode
router.get("/getBySubCode/:subcode", async (req, res) => {
    try {
        const med = await Medicine.findOne({ "SubTextCode.TextCode": req.params.subcode });
        if (!med) return res.status(404).json({ message: "Medicine not found" });
        res.json(med);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
