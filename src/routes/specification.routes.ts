import { Router } from "express";
import { CreateSpecificationContoller } from "../modules/cars/UseCases/createSpecification/CreateSpecificationController";
import { listSpecificationController } from "../modules/cars/UseCases/listSpecification";

const specificationRouter = Router();
const createSpecificationController = new CreateSpecificationContoller();
specificationRouter.post("/", createSpecificationController.handle);

specificationRouter.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationRouter };
