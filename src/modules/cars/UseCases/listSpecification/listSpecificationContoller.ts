import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSpecificationService } from "./listSpecificationService";

class ListSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationService = container.resolve(
      ListSpecificationService
    );
    const list = await listSpecificationService.execute();
    return response.status(200).json(list);
  }
}

export { ListSpecificationController };
