import { Request, Response } from "express";
import { ImportCateogryService } from "./importCategoryService";

class ImportCategoryController {
  constructor(private importCategoryService: ImportCateogryService) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;
    this.importCategoryService.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };
