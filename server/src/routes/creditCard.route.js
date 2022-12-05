import express from "express";
import getCreditCard from "../controllers/getCreditCard.controller.js";
import storeCreditCard from "../controllers/storeCreditCard.controller.js";
const router = express.Router();

router.get('/list', async (req, res) => {
    try {
        res.status(200).send(await getCreditCard());
    } catch(e) {
        res.status(500).send(JSON.parse(e.message));
    }
});

router.post('/create', async (req, res) => {
    try {
        res.status(201).send(await storeCreditCard(req.body));
    } catch(e) {
        res.status(500).send(JSON.parse(e.message));
    }
});

export default router;