import { Request, Response } from "express";
import { ListSpecificationService } from "./listSpecificationService";

class ListSpecificationController {
  constructor(private listSpecificationService: ListSpecificationService) {}

  handle(request: Request, response: Response): Response {
    const list = this.listSpecificationService.execute();
    return response.status(200).json(list);
  }
}

export { ListSpecificationController };
