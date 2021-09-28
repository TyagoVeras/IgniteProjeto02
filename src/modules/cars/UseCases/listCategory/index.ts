import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository.ts";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryService } from "./ListCategoryService";

const categoryRepository = CategoriesRepository.getInstance();
const listCategoryService = new ListCategoryService(categoryRepository);
const listCategoryController = new ListCategoryController(listCategoryService);

export { listCategoryController };
