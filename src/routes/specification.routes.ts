import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRouter = Router();

const specificationRepository = new SpecificationRepository();
specificationRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  const specificationService = new CreateSpecificationService(
    specificationRepository
  );

  specificationService.execute({ name, description });

  return response.status(201).send();
});

specificationRouter.get("/", (reqquest, response) => {
  return response.json(specificationRepository.list());
});

export { specificationRouter };
