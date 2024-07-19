import express from "express";
import os from "node:os";
// import config, {PORT} from "./config";
import config from "./config";
import apiRouter from "./api-router";
import serverRender from "./render";


const server = express();

// middleware
server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/api", apiRouter);

server.get(["/", "/contest/:contestId"], async (req, res) => {
    const { initialMarkup, initialData } = await serverRender(req);
    res.render("index", {
        initialMarkup,
        initialData
    });
});

server.listen(config.PORT, config.HOST, () => {
    console.info(`Express server is listening at ${config.SERVER_URL}`);
    // console.info(`Free memory: ${os.freemem() / 1024 / 1024}`);
});