import { Specification } from "../../models/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    const listspecfication = this.specificationRepository.list();
    return listspecfication;
  }
}

export { ListSpecificationService };
