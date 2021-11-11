import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoryService } from "./ListCategoryService";

class ListCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryService = container.resolve(ListCategoryService);

    const categoryList = await listCategoryService.execute();
    return response.json(categoryList);
  }
}

export { ListCategoryController };
