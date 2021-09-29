import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationContoller } from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationService";

const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationService = new CreateSpecificationService(
  specificationRepository
);
const createSpecificationController = new CreateSpecificationContoller(
  createSpecificationService
);

export { createSpecificationController };
