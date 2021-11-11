import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryService } from "./CreateCategoryService";

class CreateCatogryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategory = container.resolve(CreateCategoryService);

    await createCategory.execute({ name, description });
    return response.status(201).send();
  }
}

export { CreateCatogryController };
