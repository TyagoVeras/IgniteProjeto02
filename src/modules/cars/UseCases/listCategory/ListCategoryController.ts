import { Request, Response } from "express";
import { ListCategoryService } from "./ListCategoryService";

class ListCategoryController {
  constructor(private listCategoryService: ListCategoryService) {}

  handle(request: Request, response: Response): Response {
    const categoryList = this.listCategoryService.execute();
    return response.json(categoryList);
  }
}

export { ListCategoryController };
