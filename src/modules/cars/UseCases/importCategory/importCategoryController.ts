import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCateogryService } from "./importCategoryService";

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const importCategoryService = container.resolve(ImportCateogryService);
    const { file } = request;
    await importCategoryService.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };
