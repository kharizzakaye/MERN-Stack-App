import express from "express";
import os from "node:os";

// import config, {PORT} from "./config";
import config from "./config";

const server = express();

// middleware
server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
    res.render("index", {
        initialContent: "Loading..."
    });
});

server.listen(config.PORT, config.HOST, () => {
    console.info(`Express server is listening at ${config.SERVER_URL}`);
    // console.info(`Free memory: ${os.freemem() / 1024 / 1024}`);
});