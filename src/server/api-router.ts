import express from "express";
import cors from "cors";
import testData from "../test-data.json";
import { connectClient } from "./db";

// middleware
const router = express.Router();
router.use(cors());
router.use(express.json());

// API to get all contests
router.get("/contests", async (req, res) => {
    // get the data from MongoDB
    const client = await connectClient();

    const contests = await client
        .collection("contests")
        .find()
        .project({
            id: 1,
            categoryName: 1,
            contestName: 1,
            _id: 0, // do not include
        })
        .toArray();

    res.send({ contests });
    // res.send({ contests: testData});
});


// API to get onyl a single contest
router.get("/contest/:contestId", async (req, res) => {
    const client  = await connectClient();

    const contest = await client
        .collection("contests")
        .findOne({ id: req.params.contestId });

    res.send({ contest });
});


// API to update names
router.post("/contest/:contestId", async (req, res) => {
    const client = await connectClient();

    const { newNameValue } = req.body;

    console.log(newNameValue)

    const doc = await client
        .collection("contests")
        .findOneAndUpdate(
            { id: req.params.contestId },
            {
                $push: {
                    names: {
                        id: newNameValue.toLowerCase().replace(/\s/g, "-"),
                        name: newNameValue,
                        timestamp: new Date(),
                    }
                }
            },
            { returnDocument: "after" }
        );

    console.log("docs", doc)
    res.send({ updatedContest: doc });
})

export default router;