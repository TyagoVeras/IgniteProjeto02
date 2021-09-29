import { Router } from "express";
import { createSpecificationController } from "../modules/cars/UseCases/createSpecification";
import { listSpecificationController } from "../modules/cars/UseCases/listSpecification";

const specificationRouter = Router();

specificationRouter.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationRouter.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationRouter };
