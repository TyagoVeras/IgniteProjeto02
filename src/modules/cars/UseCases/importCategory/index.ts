import { CategoriesPostgresRepository } from "../../repositories/implementations/CategoriesPostgresRepository";
import { ImportCategoryController } from "./importCategoryController";
import { ImportCateogryService } from "./importCategoryService";

export default (): ImportCategoryController => {
  const categoryRepository = new CategoriesPostgresRepository();
  const importCategoryService = new ImportCateogryService(categoryRepository);
  const importCategoryController = new ImportCategoryController(
    importCategoryService
  );
  return importCategoryController;
};
