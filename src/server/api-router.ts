import express from "express";
import cors from "cors";
import testData from "../test-data.json";

const router = express.Router();
router.use(cors());

router.get("/contests", (req, res) => {
    // get the data from MongoDB
    res.send({ contests: testData});
});

// router.get("/contest");

export default router;