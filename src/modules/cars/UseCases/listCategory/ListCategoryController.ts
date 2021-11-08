import { Request, Response } from "express";
import { ListCategoryService } from "./ListCategoryService";

class ListCategoryController {
  constructor(private listCategoryService: ListCategoryService) {}

  handle(request: Request, response: Response): Response {
    const categoryList = this.listCategoryService.execute();
    console.log(categoryList);
    return response.json(categoryList);
  }
}

export { ListCategoryController };
