import { injectable, inject } from "tsyringe";
import { AppErros } from "../../../../erros/AppErros";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationService {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  execute({ name, description }: IRequest): void {
    const specification = this.specificationRepository.findByName(name);
    if (specification) {
      throw new AppErros("Specification already exists", 400);
    }
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
