import { CategoriesPostgresRepository } from "../../repositories/implementations/CategoriesPostgresRepository";
import { CreateCatogryController } from "./CreateCategoryController";
import { CreateCategoryService } from "./CreateCategoryService";

export default (): CreateCatogryController => {
  const categoriesRepository = new CategoriesPostgresRepository();
  const createCategoryService = new CreateCategoryService(categoriesRepository);

  const createCategoryController = new CreateCatogryController(
    createCategoryService
  );

  return createCategoryController;
};
