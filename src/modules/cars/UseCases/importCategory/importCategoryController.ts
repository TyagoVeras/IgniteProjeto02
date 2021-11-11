import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCateogryService } from "./importCategoryService";

class ImportCategoryController {
  handle(request: Request, response: Response): Response {
    const importCategoryService = container.resolve(ImportCateogryService);
    const { file } = request;
    importCategoryService.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };
