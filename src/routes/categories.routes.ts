import { Router } from "express";
import multer from "multer";
import createCategoryController from "../modules/cars/UseCases/createCategory";
import importCategoryController from "../modules/cars/UseCases/importCategory";
import listCategoryController from "../modules/cars/UseCases/listCategory";

const categoriesRouter = Router();
const upload = multer({
  dest: "./tmp",
});

categoriesRouter.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
});
categoriesRouter.get("/", (request, response) => {
  return listCategoryController().handle(request, response);
});

categoriesRouter.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController().handle(request, response);
});
export { categoriesRouter };
