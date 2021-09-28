import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository.ts";
import { CreateCatogryController } from "./CreateCategoryController";
import { CreateCategoryService } from "./CreateCategoryService";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryService = new CreateCategoryService(categoriesRepository);

const createCategoryController = new CreateCatogryController(
  createCategoryService
);

export { createCategoryController };
