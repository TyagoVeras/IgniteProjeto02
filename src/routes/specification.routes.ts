import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationContoller } from "../modules/cars/UseCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/UseCases/listSpecification/listSpecificationContoller";

const specificationRouter = Router();
const createSpecificationController = new CreateSpecificationContoller();
const listSpecificationController = new ListSpecificationController();

specificationRouter.use(ensureAuthenticated);
specificationRouter.post("/", createSpecificationController.handle);

specificationRouter.get("/", listSpecificationController.handle);

export { specificationRouter };
