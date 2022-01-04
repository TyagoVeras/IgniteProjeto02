import "./database";
import "./shared/container";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import { AppErros } from "./erros/AppErros";
// import swaggerJson from "../swagger.json";

const app = express();
app.use(express.json());
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use(router);

// middlware of erros
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppErros) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server errror ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("server is running on port 3333"));
