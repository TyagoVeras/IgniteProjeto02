import { ImportCategoryController } from "./importCategoryController";
import { ImportCateogryService } from "./importCategoryService";

const importCategoryService = new ImportCateogryService();
const importCategoryController = new ImportCategoryController(
  importCategoryService
);

export { importCategoryController };
