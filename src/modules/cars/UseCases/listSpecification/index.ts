import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationController } from "./listSpecificationContoller";
import { ListSpecificationService } from "./listSpecificationService";

const specificationRepository = SpecificationRepository.getInstance();

const listSpecificationService = new ListSpecificationService(
  specificationRepository
);

const listSpecificationController = new ListSpecificationController(
  listSpecificationService
);

export { listSpecificationController };
