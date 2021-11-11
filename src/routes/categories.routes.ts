import { Router } from "express";
import multer from "multer";
import { CreateCatogryController } from "../modules/cars/UseCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/UseCases/importCategory/importCategoryController";
import { ListCategoryController } from "../modules/cars/UseCases/listCategory/ListCategoryController";

const categoriesRouter = Router();
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCatogryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoriesRouter.post("/", createCategoryController.handle);
categoriesRouter.get("/", listCategoryController.handle);

categoriesRouter.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);
export { categoriesRouter };
