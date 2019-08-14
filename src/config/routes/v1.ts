import { Express } from "express";
import hello from "api/v1/hello";
import account from "api/v1/account";
import upload from "api/v1/upload";

export default (app: Express): void => {
    app.use("/v1/hello", hello);
    app.use("/v1/account", account);
    app.use("/v1/upload", upload);
};