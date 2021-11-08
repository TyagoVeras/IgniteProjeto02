import { CategoriesPostgresRepository } from "../../repositories/implementations/CategoriesPostgresRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryService } from "./ListCategoryService";

export default (): ListCategoryController => {
  const categoryRepository = new CategoriesPostgresRepository();
  const listCategoryService = new ListCategoryService(categoryRepository);
  const listCategoryController = new ListCategoryController(
    listCategoryService
  );

  return listCategoryController;
};
