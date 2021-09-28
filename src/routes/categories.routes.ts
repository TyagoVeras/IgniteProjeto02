import { Router } from "express";
import { createCategoryController } from "../modules/cars/UseCases/createCategory";
import { listCategoryController } from "../modules/cars/UseCases/listCategory";

const categoriesRouter = Router();

categoriesRouter.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRouter.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

export { categoriesRouter };
